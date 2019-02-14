module.exports = {
	transformEvents: function({ event }) {
		console.log(event);
		// shape events return fields into a nice object for us to use and love and care for forever and ever
		return event.map(e => ({
			id: e.id,
			title: e.title,
			details: {
				url: e.url || null,
				description: e.description || `no description bc we're annoying af`,
				start_time: e.start_time,
				// performer: event.performers.performer ? event.performers.performer.name : 'not listed',
				// bio: event.performers.performer.short_bio
			},
			location: {
				region: e.olson_path,
				venue: e.venue_name,
				address: e.venue_address,
				zipCode: e.postal_code,
			},
			image_url: e.image
				? e.image.medium && e.image.medium.url
				: 'https://screenshotlayer.com/images/assets/placeholder.png',
		}));
	},
};
