const moment = require('moment');
const axios = require('axios');

module.exports = {
	transformEvents: async function(eventsArr) {
		// maybe include seatmap?
		return eventsArr._embedded.events.reduce((events, ev) => {
			let existingEvent = events.findIndex(e => e.title === ev.name);
			if (existingEvent !== -1) {
				events[existingEvent].times.push(ev.dates.start.dateTime);
			} else {
				const eventImage = ev.images.filter(obj => {
					if (obj.ratio === '4_3') {
						return obj.url;
					}
				});
				events.push({
					id: ev.id,
					title: ev.name,
					// I think we'll wanna add in each events url so we can make the date/time a clickable link since each event url is unique
					url: ev.url,
					image_url: eventImage[0].url,
					times: [ ev.dates.start.dateTime ],
					genres: ev.classifications[0].genre.name,
					info: ev.info || 'no info provided',
					description: ev.pleaseNote || 'no notes included',
					price: {
						min: ev.priceRanges ? ev.priceRanges[0].min : 'min',
						max: ev.priceRanges ? ev.priceRanges[0].max : 'max',
						curr: ev.priceRanges ? ev.priceRanges[0].currency : 'USD',
					},
					location: {
						venue: ev._embedded.venues[0].name,
						address: ev._embedded.venues[0].address.line1,
						city: ev._embedded.venues[0].city.name,
						latLong: {
							lat: ev._embedded.venues[0].location.latitude,
							long: ev._embedded.venues[0].location.longitude,
						},
					},
				});
			}

			return events;
		}, []);
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
	fetchEvents: function(geoHash, cats, dates, page, size) {
		// hardcoded for testing but can easily be changed, duh
		let place = 'Chicago';

		let category = '';
		let pageSize = size || 35;
		// API likes simple genres like music, sports, etc. & city is the easiest but we can do latLong and add a radius to our query
		// if that's the route that we wanna go (super easy to change)
		return axios.get(
			`https://app.ticketmaster.com/discovery/v2/events.json?size=${pageSize}&classificationId=${cats}&geoPoint=${geoHash.slice(
				0,
				8,
			)}&apikey=${process.env.TKTMSTR_KEY}`,
		);

		// return axios.get(
		// 	`https://app.ticketmaster.com/discovery/v2/events.json?size=35&classificationId=KZFzniwnSyZfZ7v7nE&geoPoint=${geoHash}&apikey=${process
		// 		.env.TKTMSTR_KEY}`,
		// );
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
};
