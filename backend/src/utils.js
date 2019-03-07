const moment = require('moment');
const axios = require('axios');

module.exports = {
	transformEvents: function(user, eventsArr, db) {
		return eventsArr.reduce(async (previousPromise, ev) => {
			let events = await previousPromise;
			let existingEvent = events.findIndex(e => e.title === ev.name);
			if (existingEvent !== -1) {
				events[existingEvent].times.push(ev.dates.start.dateTime);
			} else {
				let [ dbEvent ] = await db.query.events(
					{
						where: {
							AND: [
								{
									venue: ev._embedded.venues[0].name,
								},
								{
									title: ev.name,
								},
							],
						},
					},
					`{id times attending {id firstName imageThumbnail img {default img_url} imageLarge dob gender biography age minAgePref maxAgePref genderPrefs blocked { id }}}`,
				);

				let eventInDb;

				if (dbEvent) {
					const attendee = dbEvent.attending.filter(attendee => {
						if (user.blocked && user.blocked.includes(attendee.id)) return false;
						if (attendee.blocked && attendee.blocked.includes(user.id)) return false;
						if (attendee.id === user.id) return false;

						return (
							moment().diff(user.dob, 'years') <= attendee.maxAgePref &&
							moment().diff(user.dob, 'years') >= attendee.minAgePref &&
							attendee.genderPrefs.includes(user.gender) &&
							moment().diff(attendee.dob, 'years') <= user.maxAgePref &&
							moment().diff(attendee.dob, 'years') >= user.minAgePref &&
							user.genderPrefs.includes(attendee.gender)
						);
					});

					eventInDb = {
						...dbEvent,
						attending: attendee,
					};
				}
				console.log(eventInDb);
				const [ img ] = ev.images.filter(img => img.width > 500);

				events.push({
					id: eventInDb ? eventInDb.id : ev.id,
					eventfulId: ev.id,
					title: ev.name,
					url: ev.url,
					image_url: img.url,
					times: ev.dates.start.noSpecificTime
						? [ ev.dates.start.localDate ]
						: [ ev.dates.start.dateTime ],
					genre: ev.classifications[0].genre && ev.classifications[0].genre.name,
					info: ev.info || null,
					description: ev.info || null,
					price: {
						min: ev.priceRanges ? ev.priceRanges[0].min : 'min',
						max: ev.priceRanges ? ev.priceRanges[0].max : 'max',
						curr: ev.priceRanges ? ev.priceRanges[0].currency : 'USD',
					},
					attending: eventInDb ? eventInDb.attending : [],
					location: {
						venue: ev._embedded.venues[0].name,
						address:
							ev._embedded.venues[0].address && ev._embedded.venues[0].address.line1,
						city: ev._embedded.venues[0].city.name,
						lat:
							ev._embedded.venues[0].location &&
							ev._embedded.venues[0].location.latitude,
						long:
							ev._embedded.venues[0].location &&
							ev._embedded.venues[0].location.longitude,
					},
				});
			}

			return events;
		}, Promise.resolve([]));
	},
	setDates: function(dates) {
		let start, end;
		switch (dates) {
			case 'this week':
			case 'this week,this weekend':
				start = moment().startOf('isoWeek').format();
				end = moment().endOf('isoWeek').format();
				break;
			case 'this week,this weekend,next week':
			case 'this week,next week':
				start = moment().startOf('isoWeek').format();
				end = moment().add(1, 'weeks').endOf('isoWeek').format();
				break;
			case 'this weekend,next week':
				start = moment().endOf('isoWeek').subtract(3, 'days').format();
				end = moment().add(1, 'weeks').endOf('isoWeek').format();
				break;
			case 'this weekend':
				start = moment().endOf('isoWeek').subtract(3, 'days').format();
				end = moment().endOf('isoWeek').format();
				break;
			case 'next week':
				start = moment().add(1, 'weeks').startOf('isoWeek').format();
				end = moment().add(1, 'weeks').endOf('isoWeek').format();
				break;
			default:
				start = moment().add(1, 'day').startOf('day').format();
				end = moment().add(1, 'day').endOf('day').format();
				break;
		}
		return { start, end };
	},
	checkDates: function(dates, events) {
		let date, start, end, filteredEvents;
		switch (dates.toLowerCase()) {
			case 'all':
				return events;
			case 'today':
				date = moment().format('YYYY-MM-DD');
				return events.filter(ev =>
					ev.times.some(t => moment(t).format('YYYY-MM-DD') === date),
				);
			case 'this weekend':
				start = moment().endOf('isoWeek').subtract(2, 'days').format('YYYY-MM-DD');
				end = moment().endOf('isoWeek').format('YYYY-MM-DD');
				return events.filter(ev =>
					ev.times.some(
						t =>
							moment(t).format('YYYY-MM-DD') >= start &&
							moment(t).format('YYYY-MM-DD') <= end,
					),
				);
			case 'next week':
				start = moment().add(1, 'weeks').startOf('isoWeek').format('YYYY-MM-DD');
				end = moment().add(1, 'weeks').endOf('isoWeek').format('YYYY-MM-DD');
				return events.filter(ev =>
					ev.times.some(
						t =>
							moment(t).format('YYYY-MM-DD') >= start &&
							moment(t).format('YYYY-MM-DD') <= end,
					),
				);
			default:
				date = moment(`${moment().format('YYYY')} ${dates}`, 'YYYY MMM DD').format(
					'YYYY-MM-DD',
				);
				return events.filter(ev =>
					ev.times.some(t => moment(t).format('YYYY-MM-DD') === date),
				);
		}
	},
	fetchEvents: function(geoHash, cats, dates, page, size, genres) {
		if (dates) {
			if (genres && genres.length) {
				return axios.get(
					`https://app.ticketmaster.com/discovery/v2/events.json?size=${size}&page=${page}&startDateTime=${dates.start}&endDateTime=${dates.end}&classificationId=${cats}&genreId=${genres}&city=${geoHash}&apikey=${process
						.env.TKTMSTR_KEY}`,
				);
			}
			return axios.get(
				`https://app.ticketmaster.com/discovery/v2/events.json?size=${size}&page=${page}&startDateTime=${dates.start}&endDateTime=${dates.end}&classificationId=${cats}&city=${geoHash}&apikey=${process
					.env.TKTMSTR_KEY}`,
			);
		}
		if (genres && genres.length) {
			return axios.get(
				`https://app.ticketmaster.com/discovery/v2/events.json?size=${size}&page=${page}&startDateTime=${moment().format()}&classificationId=${cats}&genreId=${genres}&city=${geoHash}&apikey=${process
					.env.TKTMSTR_KEY}`,
			);
		}
		return axios.get(
			`https://app.ticketmaster.com/discovery/v2/events.json?size=${size}&page=${page}&startDateTime=${moment().format()}&classificationId=${cats}&city=${geoHash}&apikey=${process
				.env.TKTMSTR_KEY}`,
		);
	},
	getEventImages: function(id) {
		return axios.get(
			`https://app.ticketmaster.com/discovery/v2/events/${id}/images.json?apikey=${process.env
				.TKTMSTR_KEY}`,
		);
	},
	async getUser(ctx) {
		const Authorization = (ctx.req || ctx.request).get('Authorization');
		if (Authorization) {
			const token = Authorization.replace('Bearer ', '');
			const { id, admin } = await verifyUserSessionToken(token);
			return { id, admin };
		}
		return null;
	},

	async getScore(currentUserId, matchingUserId, db) {
		// events that both users have in common
		const sharedEvents = await db.query.events({
			where: {
				AND: [
					{
						attending_some: {
							id: currentUserId,
						},
					},
					{
						attending_some: {
							id: matchingUserId,
						},
					},
				],
			},
		});

		// combined events between the two users
		const combinedEvents = await db.query.events({
			where: {
				OR: [
					{
						attending_some: {
							id: currentUserId,
						},
					},
					{
						attending_some: {
							id: matchingUserId,
						},
					},
				],
			},
		});

		// calculate eventScore with .6 coef
		const eventScore =
			combinedEvents.length === 0
				? 0
				: Math.floor(sharedEvents.length / combinedEvents.length * 10000 * 60 / 100);

		// query current user events genre
		const currentUser = await db.query.users(
			{
				where: {
					id: currentUserId,
				},
			},
			`{ events { genre } }`,
		);

		// get unique genre list for current user
		const currentUserGenres = currentUser[0].events.reduce((genres, event) => {
			if (event.genre && !genres.includes(event.genre)) {
				genres.push(event.genre);
			}
			return genres;
		}, []);

		// calculate eventScore with .6 coef
		// const eventScore =
		// 	combinedEvents.length === 0
		// 		? 0
		// 		: Math.floor(sharedEvents.length / combinedEvents.length * 10000 * 60 / 100);

		// query matching user events genre
		const matchingUser = await db.query.users(
			{
				where: {
					id: matchingUserId,
				},
			},
			`{ events { genre } }`,
		);

		// get unique genre list for matching user
		const matchingUserGenres = matchingUser[0].events.reduce((genres, event) => {
			if (event.genre && !matchingUser.includes(event.genre)) {
				genres.push(event.genre);
			}
			return genres;
		}, []);

		// get shared genres between the two users
		const sharedGenre = currentUserGenres.reduce((count, genre) => {
			if (matchingUserGenres.includes(genre)) count++;
			return count;
		}, 0);

		// calculate genreScore with .4 coef
		const genreScore =
			currentUserGenres.length + matchingUserGenres.length === 0
				? 0
				: Math.floor(
						sharedGenre /
							(matchingUserGenres.length + currentUserGenres.length - sharedGenre) *
							10000 *
							40 /
							100,
					);

		// compatibility score is the sum of eventScore and genreScore
		const score = eventScore + genreScore;

		return score;
	},
};
