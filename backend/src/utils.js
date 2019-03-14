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
					`{id times  attending {id firstName imageThumbnail img {id default img_url} imageLarge dob gender biography age minAgePref maxAgePref genderPrefs blocked { id }}}`,
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
					genre: ev.classifications[0].genre ? ev.classifications[0].genre.name : null,

					category: ev.classifications[0].segment && ev.classifications[0].segment.name,

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

		// calculate eventScore giving 10 max points
		let eventScore = Math.floor(Math.log2(3.5 * sharedEvents.length + 1) * 1000)
		eventScore = eventScore > 5000 ? 5000 : eventScore


		// query current user events genre and current user interests
		const currentUser = await db.query.users(
			{
				where: {
					id: currentUserId,
				},
			},
			`{ events { id genre } interests { id } }`,
		);

		// get unique genre list for current user
		const currentUserGenres = currentUser[0].events.reduce((genres, event) => {
			if (event.genre && !genres.includes(event.genre)) {
				genres.push(event.genre);
			}
			return genres;
		}, []);

		// query matching user events genre and matching user interests
		const matchingUser = await db.query.users(
			{
				where: {
					id: matchingUserId,
				},
			},
			`{ events { genre } interests { id } }`,
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

		// calculate genreScore giving 5 max points
		const genreScore = sharedGenre < 5 ? sharedGenre : 5;

		// get shared interest between the two users
		const sharedInterest = currentUser[0].interests.reduce((shared, interest) => {
			if (matchingUser[0].interests.find(i => i.id === interest.id)) shared.push(interest);
			return shared;
		}, []);

		// calculate interestScore giving 5 max point
		let interestScore = Math.floor(Math.log2(3 * sharedInterest.length + 1) * 1000)
		interestScore = interestScore > 5000 ? 5000 : interestScore

		// compatibility score is the sum of eventScore, genreScore, and interestScore
		const score = eventScore + 0 * genreScore + interestScore;
		return score;
	},
};
