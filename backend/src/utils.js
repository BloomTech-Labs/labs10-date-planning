module.exports = {
	transformEvents: function({ event }) {
		// console.log(event);
		// shape events return fields into a nice object for us to use and love and care for forever and ever
		return event.reduce((events, ev) => {
			let existingEvent = events.findIndex(
				e => e.title === ev.title && e.location.venue === ev.venue_name,
			);

			if (existingEvent !== -1) {
				events[existingEvent].times.push(ev.start_time);
			} else {
				events.push({
					id: ev.id,
					title: ev.title,
					url: ev.url || null,
					description: ev.description || `no description bc we're annoying af`,
					times: [ ev.start_time ],
					location: {
						city: ev.city_name,
						venue: ev.venue_name,
						address: ev.venue_address,
						zipCode: ev.postal_code,
					},
					venue_id: ev.venue_id,
					image_url: ev.image
						? ev.image.medium && ev.image.medium.url
						: 'https://screenshotlayer.com/images/assets/placeholder.png',
				});
			}
			return events;
		}, []);
	},
};

// return event.map(e => ({
// 	id: e.id,
// 	title: e.title,
// 	details: {
// 		url: e.url || null,
// 		description: e.description || `no description bc we're annoying af`,
// 		start_time: e.start_time,
// 		// performer: event.performers.performer ? event.performers.performer.name : 'not listed',
// 		// bio: event.performers.performer.short_bio
// 	},
// 	location: {
// 		region: e.olson_path,
// 		venue: e.venue_name,
// 		address: e.venue_address,
// 		zipCode: e.postal_code,
// 	},
// 	image_url: e.image
// 		? e.image.medium && e.image.medium.url
// 		: 'https://screenshotlayer.com/images/assets/placeholder.png',
