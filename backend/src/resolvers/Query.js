const { forwardTo } = require('prisma-binding');
const axios = require('axios');
const moment = require('moment');
const { transformEvents } = require('../utils');

const Query = {
	users: forwardTo('db'),
	events: forwardTo('db'),
	currentUser(parent, args, { db, request }, info) {
		// check if there is a current user ID
		if (!request.userId) {
			return null;
		}
		return db.query.user(
			{
				where: { id: request.userId }
			},
			info
		);
	},
	user(parent, args, { db }, info) {
		// finds a user based on the args provided in the mutation
		return db.query.user(
			{
				...args
			},
			info
		);
	},
	async getEvents(parent, { location, page, ...args }, ctx, info) {
		var now = moment.now();
		const parsed = moment('20190218').format('YYYY-MM-DD');
		let today = new Date();
		console.log(now, today.getDate(), parsed);
		// console.log(args);
		let categories = args.categories
			? args.categories.toString()
			: 'music,comedy,performing_arts,sports';
		let dates = args.dates ? args.dates.toString() : 'all';
		// console.log(categories, dates, page, location);
		const { data } = await axios.get(
			`https://api.eventful.com/json/events/search?location=${location}&category=${categories}&date=${dates}&page_number=${page}&page_size=15&app_key=${
				process.env.API_KEY
			}`
		);

		// shapes return object into sveldt, beautiful object with whimsical designs
		let events = transformEvents(data.events);

		return {
			events: events,
			total_items: data.total_items,
			page_count: data.page_count,
			page_number: data.page_number
		};
	},
	async getEvent(parent, args, ctx, info) {
		// find specific event
		const event = await axios.get(
			`http://api.eventful.com/json/events/get?&id=${args.id}&app_key=${process.env.API_KEY}`
		);
		// gonna make another helper to shape this bad boy too
		return {
			title: event.data.title,
			id: event.data.id,
			// url: event.data.url,
			location: {
				venue: event.data.venue_name
			},
			details: {
				tags: event.data.tags.tag
			}
		};
	},
	async getLocation(parent, { latitude, longitude }, ctx, info) {
		const location = await axios.get(
			`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude}, ${longitude}&key=${
				process.env.GOOGLE_API_KEY
			}`
		);
		let city = location.data.results[0].address_components[3].long_name;
		let state = location.data.results[0].address_components[5].short_name;
		console.log(city, state);
		return {
			location: `${city}, ${state}`
		};
	}
};

module.exports = Query;
