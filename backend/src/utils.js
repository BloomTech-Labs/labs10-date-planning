const moment = require('moment');
const axios = require('axios');

module.exports = {
	transformEvents: function(eventsArr) {
		return eventsArr.reduce((events, ev) => {
			let existingEvent = events.findIndex(e => e.title === ev.name);
			if (existingEvent !== -1) {
				events[existingEvent].times.push(ev.dates.start.dateTime);
			} else {
				const [eventImage] = ev.images.filter(obj => {
					if (obj.ratio === '4_3') {
						return obj.url;
					}
				});
				const [img] = ev.images.filter(img => img.width > 500);

				events.push({
					id: ev.id,
					title: ev.name,
					url: ev.url,
					image_url: eventImage.url,
					large_url: img.url,
					times: [ev.dates.start.dateTime],
					genres: ev.classifications[0].genre && ev.classifications[0].genre.name,
					info: ev.info || 'no info provided',
					description: ev.pleaseNote || 'no notes included',
					price: {
						min: ev.priceRanges ? ev.priceRanges[0].min : 'min',
						max: ev.priceRanges ? ev.priceRanges[0].max : 'max',
						curr: ev.priceRanges ? ev.priceRanges[0].currency : 'USD'
					},
					location: {
						venue: ev._embedded.venues[0].name,
						address: ev._embedded.venues[0].address && ev._embedded.venues[0].address.line1,
						city: ev._embedded.venues[0].city.name,
						lat: ev._embedded.venues[0].location && ev._embedded.venues[0].location.latitude,
						long: ev._embedded.venues[0].location && ev._embedded.venues[0].location.longitude
					}
				});
			}

			return events;
		}, []);
	},
	setDates: function(dates) {
		let start, end;
		switch (dates) {
			case 'this week':
			case 'this week,this weekend':
				start = moment()
					.startOf('isoWeek')
					.format();
				end = moment()
					.endOf('isoWeek')
					.format();
				break;
			case 'this week,this weekend,next week':
			case 'this week,next week':
				start = moment()
					.startOf('isoWeek')
					.format();
				end = moment()
					.add(1, 'weeks')
					.endOf('isoWeek')
					.format();
				break;
			case 'this weekend,next week':
				start = moment()
					.endOf('isoWeek')
					.subtract(3, 'days')
					.format();
				end = moment()
					.add(1, 'weeks')
					.endOf('isoWeek')
					.format();
				break;
			case 'this weekend':
				start = moment()
					.endOf('isoWeek')
					.subtract(3, 'days')
					.format();
				end = moment()
					.endOf('isoWeek')
					.format();
				break;
			case 'next week':
				start = moment()
					.add(1, 'weeks')
					.startOf('isoWeek')
					.format();
				end = moment()
					.add(1, 'weeks')
					.endOf('isoWeek')
					.format();
				break;
			default:
				start = moment()
					.add(1, 'day')
					.startOf('day')
					.format();
				end = moment()
					.add(1, 'day')
					.endOf('day')
					.format();
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
				return events.filter(ev => ev.times.some(t => moment(t).format('YYYY-MM-DD') === date));
			case 'this weekend':
				start = moment()
					.endOf('isoWeek')
					.subtract(2, 'days')
					.format('YYYY-MM-DD');
				end = moment()
					.endOf('isoWeek')
					.format('YYYY-MM-DD');
				return events.filter(ev =>
					ev.times.some(
						t => moment(t).format('YYYY-MM-DD') >= start && moment(t).format('YYYY-MM-DD') <= end
					)
				);
			case 'next week':
				start = moment()
					.add(1, 'weeks')
					.startOf('isoWeek')
					.format('YYYY-MM-DD');
				end = moment()
					.add(1, 'weeks')
					.endOf('isoWeek')
					.format('YYYY-MM-DD');
				return events.filter(ev =>
					ev.times.some(
						t => moment(t).format('YYYY-MM-DD') >= start && moment(t).format('YYYY-MM-DD') <= end
					)
				);
			default:
				date = moment(`${moment().format('YYYY')} ${dates}`, 'YYYY MMM DD').format('YYYY-MM-DD');
				return events.filter(ev => ev.times.some(t => moment(t).format('YYYY-MM-DD') === date));
		}
	},
	fetchEvents: function(geoHash, cats, dates, page, size, genres) {
		if (dates) {
			if (genres && genres.length) {
				return axios.get(
					`https://app.ticketmaster.com/discovery/v2/events.json?size=${size}&page=${page}&startDateTime=${
						dates.start
					}&endDateTime=${
						dates.end
					}&classificationId=${cats}&genreId=${genres}&city=${geoHash}&apikey=${
						process.env.TKTMSTR_KEY
					}`
				);
			}
			return axios.get(
				`https://app.ticketmaster.com/discovery/v2/events.json?size=${size}&page=${page}&startDateTime=${
					dates.start
				}&endDateTime=${dates.end}&classificationId=${cats}&city=${geoHash}&apikey=${
					process.env.TKTMSTR_KEY
				}`
			);
		}
		if (genres && genres.length) {
			return axios.get(
				`https://app.ticketmaster.com/discovery/v2/events.json?size=${size}&page=${page}&classificationId=${cats}&genreId=${genres}&city=${geoHash}&apikey=${
					process.env.TKTMSTR_KEY
				}`
			);
		}
		return axios.get(
			`https://app.ticketmaster.com/discovery/v2/events.json?size=${size}&page=${page}&classificationId=${cats}&city=${geoHash}&apikey=${
				process.env.TKTMSTR_KEY
			}`
		);
	},
	getEventImages: function(id) {
		return axios.get(
			`https://app.ticketmaster.com/discovery/v2/events/${id}/images.json?apikey=${
				process.env.TKTMSTR_KEY
			}`
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
	}
	// async getGeoHash(city) {
	// 	const response = await axios(
	// 		`https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${process.env
	// 			.GOOGLE_API_KEY}`,
	// 	);
	// 	let { lat, lng } = response.data.results[0].geometry.location;

	// 	const geoResponse = await axios(`http://geohash.org?q=${lat},${lng}&format=url`);
	// 	let geoHash = geoResponse.data.replace('http://geohash.org/', '').slice(0, 8);
	// 	return { geoHash };
	// },
};
