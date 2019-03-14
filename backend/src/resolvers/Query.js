const axios = require('axios');
const { forwardTo } = require('prisma-binding');
const { transformEvents, fetchEvents, setDates, getScore } = require('../utils');
const stripe = require('../stripe');
const moment = require('moment');
const MessageQuery = require('./Messages/MessageQuery');
const UserQuery = require('./User/UserQuery');

const Query = {
	...MessageQuery,
	...UserQuery,
	genres: forwardTo('db'),
	async userEvents(parent, args, { request, db }, info) {
		const { user } = request;
		if (!user) throw new Error('You must be logged in to use this feature!');
		let events = await db.query.events(
			{
				where: {
					attending_some: {
						id: user.id,
					},
				},
			},
			info,
		);

		return events;
	},
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
	async user(parent, args, { request, db }, info) {
		// finds a user based on the args provided in the mutation
		const { userId } = request;

		let score = 0;
		if (args.where.id) {
			score = await getScore(userId, args.where.id, db);
		}

		const user = await db.query.user(
			{
				...args,
			},
			`{
				id
				firstName
				dob
				img {
					id
					default
					img_url
				}
				biography
				events {
					id
				}
				interests {
					id
				}
			}`,
		);

		return {
			...user,
			score,
		};
	},
	async getEvents(parent, { location, alt, page, ...args }, { db, request }, info) {
		location = location.split(',')[0].toLowerCase();
		let cats =
			!args.categories || !args.categories.length
				? [ 'KZFzniwnSyZfZ7v7nJ', 'KZFzniwnSyZfZ7v7na', 'KZFzniwnSyZfZ7v7n1' ]
				: args.categories;

		const dates =
			!args.dates || !args.dates.length ? undefined : setDates(args.dates.toString());

		let events;
		let response = await fetchEvents(location, cats, dates, page, 26, args.genres);

		events = response.data._embedded.events;

		let uniques = events.reduce((a, t) => {
			if (!a.includes(t.name)) a.push(t.name);
			return a;
		}, []);
		let pageNumber = response.data.page.number;

		if (response.data.page.totalElements > 26) {
			while (uniques.length < 26) {
				page = page + 1;

				let res = await fetchEvents(location, cats, dates, page, 26, args.genres);
				pageNumber = res.data.page.number;
				if (!res.data._embedded) break;
				else {
					events = [ ...events, ...res.data._embedded.events ];
					uniques = res.data._embedded.events.reduce((a, t) => {
						if (!a.includes(t.name)) a.push(t.name);
						return a;
					}, uniques);
				}
			}
		}

		const eventList = await transformEvents(request.user, events, db);
		// const usersScore = {};

		// const newList = await eventList.map(async event => ({
		// 	...event,
		// 	attending: await event.attending.map(async attendee => {
		// 		if (attendee.id === request.user.id) return attendee;
		// 		if (!usersScore[attendee.id]) {
		// 			usersScore[attendee.id] = await getScore(request.user.id, attendee.id, db);
		// 		}
		// 		return {
		// 			...attendee,
		// 			score: usersScore[attendee.id],
		// 		};
		// 	}),
		// }));

		return {
			events: eventList,
			page_count: response.data.page.size,
			total_items: response.data.page.totalElements,
			page_total: response.data.page.totalPages,
			page_number: pageNumber,
			location: location,
		};
	},

	async getEvent(parent, args, ctx, info) {
		const { data } = await axios.get(
			`https://app.ticketmaster.com/discovery/v2/events/${args.id}.json?apikey=${process.env
				.TKTMSTR_KEY}`,
		);

		const [ img ] = data.images.filter(img => img.width > 500);
		return {
			title: data.name,
			id: data.id,
			url: data.url,
			location: {
				city: data._embedded ? data._embedded.venues[0].city.name : 'poop',
				venue: data._embedded ? data._embedded.venues[0].name : 'poopoo',
				address: data._embedded ? data._embedded.venues[0].address.line1 : 'damnit 3',
				zipCode: data._embedded ? data._embedded.venues[0].postalCode : 'shit 4',
			},
			image_url: img.url,
			description: data.info,
			times: [ data.dates.start.dateTime ],
		};
	},
	async getLocation(parent, { latitude, longitude }, ctx, info) {
		const location = await axios.get(
			`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude}, ${longitude}&key=${process
				.env.GOOGLE_API_KEY}`,
		);
		let city = location.data.results[0].address_components[3].long_name;
		let state = location.data.results[0].address_components[5].short_name;
		let county = location.data.results[0].address_components[4].long_name;

		return {
			city: `${city}, ${state}`,
			county: `${county}, ${state}`,
		};
	},
	async locationSearch(parent, args, { db }, info) {
		const response = await axios(
			`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${args.city}&types=(cities)&key=${process
				.env.GOOGLE_API_KEY}`,
		);
		const results = response.data.predictions;
		const city = results.map(result => {
			return { city: result.description };
		});
		return city;
	},
	async geoHash(parent, { city }, { db }, info) {
		const response = await axios(
			`https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${process.env
				.GOOGLE_API_KEY}`,
		);
		let { lat, lng } = response.data.results[0].geometry.location;

		const geoResponse = await axios(`http://geohash.org?q=${lat},${lng}&format=url`);
		let geoHash = geoResponse.data.replace('http://geohash.org/', '').slice(0, 8);
		return { geoHash };
	},
	async getRemainingDates(parent, args, ctx, info) {
		// Check user's login status
		const { userId } = ctx.request;
		if (!userId) throw new Error('You must be signed in to access this app.');

		const user = await ctx.db.query.user(
			{ where: { id: userId } },
			`
				{id permissions events {id}}
			`,
		);
		// TO DO: define subscription level and benefit!!!
		let datesCount = 5;
		if (user.permissions === 'MONTHLY') datesCount += 3;
		if (user.permissions === 'YEARLY') datesCount += 5;

		return { count: datesCount - user.events.length };
	},
	async invoicesList(parent, args, ctx, info) {
		const { userId, user } = ctx.request;
		if (!userId) throw new Error('You must be signed in to access this app.');

		const invoices = await stripe.invoices.list({
			customer: user.stripeCustomerId,
		});

		return invoices.data;
	},

	async remainingMessages(parent, args, { db, request }, info) {
		const { userId, user } = request;
		const sentMessages = await db.query.directMessages({
			where: {
				AND: [ { from: { id: user.id } }, { createdAt_gte: moment().startOf('isoWeek') } ],
			},
		});

		return 20 - sentMessages.length;
	},
};

module.exports = Query;
