const { forwardTo } = require('prisma-binding');
const axios = require('axios');
const moment = require('moment');
const { transformEvents, fetchEvents } = require('../utils');

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
				where: { id: request.userId },
			},
			info,
		);
	},
	user(parent, args, { db }, info) {
		// finds a user based on the args provided in the mutation
		return db.query.user(
			{
				...args,
			},
			info,
		);
	},
	async getEvents(parent, { location, alt, page, ...args }, ctx, info) {
		// var now = moment.now();
		// console.log(location, alt);
		let categories = args.categories
			? args.categories.toString()
			: 'music,comedy,performing_arts,sports';
		let dates = args.dates ? args.dates.toString() : 'all';
		// console.log(categories, dates, page, location);
		let response = await fetchEvents(location, categories, dates, page);

		let data = response.data,
			events;

		if (data.events) {
			events = transformEvents(data.events);
		} else {
			response = await fetchEvents(alt, categories, dates, page);
			data = response.data;
			events = transformEvents(data.events);
		}
		if (!data) {
			throw new Error('There is no event info for your current location');
		}

		return {
			events: events,
			total_items: data.total_items,
			page_count: data.page_count,
			page_number: data.page_number,
		};
	},
	async getEvent(parent, args, ctx, info) {
		const event = await axios.get(
			`http://api.eventful.com/json/events/get?&id=${args.id}&app_key=${process.env.API_KEY}`,
		);
		// gonna make another helper to shape this bad boy too
		return {
			title: event.data.title,
			id: event.data.id,
			location: {
				venue: event.data.venue_name,
			},
			details: {
				tags: event.data.tags.tag,
			},
		};
	},
	async getLocation(parent, { latitude, longitude }, ctx, info) {
		console.log(longitude, latitude);
		const location = await axios.get(
			`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude}, ${longitude}&key=${process
				.env.GOOGLE_API_KEY}`,
		);

		let city = location.data.results[0].address_components[3].long_name;
		let state = location.data.results[0].address_components[5].short_name;
		let county = location.data.results[0].address_components[4].long_name;
		// console.log(city, county, state);

		return {
			city: `${city}, ${state}`,
			county: `${county}, ${state}`,
		};
	},

	async getUserOrder(parent, args, ctx, info) {
		// Check user's login status
		const { userId } = ctx.request;
		if (!userId) throw new Error('You must be signed in to access orders.');

		return ctx.db.query.orders({
			where: {
				user: {
					id: args.userId
				}
			}
		}, info)
	},

	async getRemainingDates(parent, args, ctx, info) {
		// Check user's login status
		const { userId } = ctx.request;
		if (!userId) throw new Error('You must be signed in to access this app.');

		const user = await ctx.db.query.user(
			{ where: { id: userId } },
			`
				{id permissions events {id}}
			`
		);

		// TO DO: define subscription level and benefit!!!
		let datesCount = 5;
		if (user.permissions[0] === 'MONTLY') datesCount += 3;
		if (user.permissions[0] === 'YEARLY') datesCount += 5;
		

		return { count: datesCount };
	}
};

module.exports = Query;
