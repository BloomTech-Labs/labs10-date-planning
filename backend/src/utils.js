module.exports = {
	transformEvents: function(events) {
		// shape events return fields into a nice object for us to use and love and care for forever and ever
		return events.map(event => ({
			id: event.id,
			title: event.title,
			details: {
				url: event.url || null,
				description: event.description || `no description bc we're annoying af`,
				start_time: event.start_time,
				// performer: event.performers.performer ? event.performers.performer.name : 'not listed',
				// bio: event.performers.performer.short_bio
			},
			location: {
				region: event.olson_path,
				venue: event.venue_name,
				address: event.venue_address,
				zipCode: event.postal_code,
			},
			image_url: event.image
				? event.image.medium && event.image.medium.url
				: 'https://screenshotlayer.com/images/assets/placeholder.png',
		}));
	},
};
