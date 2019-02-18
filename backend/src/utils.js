const moment = require('moment');
const axios = require('axios');

module.exports = {
	transformEvents: function({ event }) {
		// shape events return fields into a nice object for us to use and love and care for forever and ever
		return event.reduce((events, ev) => {
			let existingEvent = events.findIndex(
				e => e.title === ev.title && e.location.venue === ev.venue_name
			);

			if (existingEvent !== -1) {
				events[existingEvent].times.push(ev.start_time);
			} else {
				events.push({
					id: ev.id,
					title: ev.title,
					url: ev.url || null,
					description: ev.description || `no description bc we're annoying af`,
					times: [ev.start_time],
					location: {
						city: ev.city_name,
						venue: ev.venue_name,
						address: ev.venue_address,
						zipCode: ev.postal_code
					},
					venue_id: ev.venue_id,
					image_url: ev.image && ev.image.medium && ev.image.medium.url
				});
			}
			return events;
		}, []);
	},
	checkDates: function (dates, events) {
		let date, start, end;
		switch (dates) {
			case 'all':
				return events;
			case 'today':
				date = moment().format("YYYY-MM-DD");
				return events.filter(
					ev => ev.times.some(
						t => moment(t).format('YYYY-MM-DD') === date
					)
				);
			case 'this weekend':
				start = moment().endOf('isoWeek').subtract(2, 'days').format("YYYY-MM-DD");
				end = moment().endOf('isoWeek').format("YYYY-MM-DD");
				return events.filter(
					ev => ev.times.some(
						t => moment(t).format('YYYY-MM-DD') >= start && moment(t).format('YYYY-MM-DD') <= end
					)
				);
			case 'next week':
				start = moment().add(1, 'weeks').startOf('isoWeek').format("YYYY-MM-DD");
				end = moment().add(1, 'weeks').endOf('isoWeek').format("YYYY-MM-DD");
				return events.filter(
					ev => ev.times.some(
						t => moment(t).format('YYYY-MM-DD') >= start && moment(t).format('YYYY-MM-DD') <= end
					)
				);
			default:
				date = moment(`${moment().format('YYYY')} ${dates}`, 'YYYY MMM DD').format("YYYY-MM-DD");
				return events.filter(
					ev => ev.times.some(
						t => moment(t).format('YYYY-MM-DD') === date
					)
				);
		}
	},
	fetchEvents: function(location, cat, dates, page) {
		return axios.get(
			`https://api.eventful.com/json/events/search?location=${location}&category=${cat}&date=${dates}&page_number=${page}&page_size=15&app_key=${
				process.env.API_KEY
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
};
