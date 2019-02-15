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
					image_url: ev.image
						? ev.image.medium && ev.image.medium.url
						: 'https://screenshotlayer.com/images/assets/placeholder.png'
				});
			}
			return events;
		}, []);
	},
	// NEED TO ADD LATER
	//
	//
	// checkDates: function(dates, events) {
	// 	let today = moment.now();
	// 	if (dates.length > 1) {
	// 	} else {
	// 		// let date = moment(dates.toString()).format('MMM DD')
	// 	}
	// },
	fetchEvents: function(location, cat, dates, page) {
		return axios.get(
			`https://api.eventful.com/json/events/search?location=${location}&category=${cat}&date=${dates}&page_number=${page}&page_size=15&app_key=${
				process.env.API_KEY
			}`
		);
	}
};
