const axios = require('axios');
const { transformEvents, fetchEvents } = require('../utils');
const { checkDates } = require('../utils');

const Query = {
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
		// const categories = args.categories
		// 	? args.categories

		let cats = args.categories.length
			? args.categories
			: [
					'KZFzniwnSyZfZ7v7nJ',
					'KZFzniwnSyZfZ7v7na',
					'KZFzniwnSyZfZ7v7nE',
					'KZFzniwnSyZfZ7v7n1',
				];

		const dates = args.dates ? args.dates.toString() : 'all';

		let response = await fetchEvents(location, cats, dates, page);

		let events = response.data._embedded.events;
		let uniques = events.reduce((a, t) => {
			if (!a.includes(t.name)) a.push(t.name);
			return a;
		}, []);

		if (response.data.page.totalElements > 35) {
			while (uniques.length < 35) {
					page = page + 1;
					let res = await fetchEvents(location, cats, dates, page);

					if (!res.data) break;
					else {
						events = [...events, ...res.data._embedded.events];
						uniques = res.data._embedded.events.reduce((a, t) => {
							if (!a.includes(t.name)) a.push(t.name);
							return a;
						}, uniques);
					}
			}
		}

		// return events;
		// if (!response.data) {
		// 	throw new Error('There is no event info for your current location');
		// }

		// let filteredEvents = [];
		// if (args.dates.includes('All') || args.dates.length === 0) {
		// 	filteredEvents = [...events];
		// } else {
		// 	filteredEvents = args.dates.reduce((e, date) => [...e, ...checkDates(date, events)], []) ;
		// }

		return {
			events: transformEvents(events),
			page_count: response.data.page.size,
			total_items: response.data.page.totalElements,
			page_total: response.data.page.totalPages,
			page_number: response.data.page.number,
			location: location,
		};
	},

	async getEvent(parent, args, ctx, info) {
		const { data } = await axios.get(
			`https://app.ticketmaster.com/discovery/v2/events/${args.id}.json?apikey=${process.env
				.TKTMSTR_KEY}`,
		);
		console.log(data);
		// let data = _embedded;
		const img = data.images.filter(img => img.ratio === '4_3');
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
			// img in 3_2 or 16_9 ratio is nicer quality, just need to figure out how to get it to be responsive
			// or we could keep it at 4_3 i'm cool either way
			image_url: img[0].url,
			description: data.info,
			times: [ data.dates.start.dateTime ],
			// data.dates.status.code (might be good for things like rescheduled events)
			// data.pleaseNote (has additional info for things that are rescheduled or something like that it seems)
			// optional data points to include
			// data.priceRanges[0].currency
			// data.priceRanges[0].min (min ticket price)
			// data.priceRanges[0].max (higheest price)
			// data.classifications.genre.name or .subGenre.name
			// data.seatmap.staticUrl (link to seating map)
			// data.products (includes things sold with it like parking, etc..
			// data.sales.public.startDateTime && endDateTime (when tickets start and end being on sale to public)
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
		// console.log(city, county, state);

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
		console.log(results);
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
		let geoHash = geoResponse.data.replace('http://geohash.org/', '');
		return { geoHash };
	},
	async getUserOrder(parent, args, ctx, info) {
		// Check user's login status
		const { userId } = ctx.request;
		if (!userId) throw new Error('You must be signed in to access orders.');

		return ctx.db.query.orders(
			{
				where: {
					user: {
						id: args.userId,
					},
				},
			},
			info,
		);
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
		if (user.permissions[0] === 'MONTHLY') datesCount += 3;
		if (user.permissions[0] === 'YEARLY') datesCount += 5;

		return { count: datesCount - user.events.length };
	},
	async invoicesList(parent, args, ctx, info) {
		// Check user's login status
		const { userId } = ctx.request;
		if (!userId) throw new Error('You must be signed in to access this app.');

		const user = await ctx.db.query.user(
			{ where: { id: userId } },
			`
				{id permissions events {id}}
			`
		);

		const invoices = await stripe.invoices.list(
			{
				customer: user.stripeCustomerId
			}
		);
		console.log(invoices.map(invoice => ({
			receipt_number: invoice.receipt_number,
			amount_due: invoice.amount_due,
			amount_paid: invoice.amount_paid,
			date: invoice.date,
			hosted_url: invoice.hosted_invoice_url,
			pdf_url: invoice.invoice_pdf
		})));
		return {
			message: 'invoices'
		}
	}
};

module.exports = Query;
