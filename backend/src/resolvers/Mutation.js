const { randomBytes } = require('crypto');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { forwardTo } = require('prisma-binding');
const { transport, formatEmail } = require('../mail');
const authy = require('authy')(process.env.AUTHY_KEY);
const stripe = require('../stripe');
const {
	createUserToken,
	verifyIdToken,
	getUserRecord,
	setUserClaims,
} = require('../firebase/firebase');
const MessageMutation = require('./Messages/MessageMutation');
const UserMutation = require('./User/UserMutation');

const Mutation = {
	...MessageMutation,
	...UserMutation,
	deleteManyGenres: forwardTo('db'),
	async signup(parent, args, { db, response }, info) {
		// just in case some bozo puts their email in with capitalization for some reason
		args.email = args.email.toLowerCase();
		if (!/^(?=.*\d).{8,}$/.test(args.password)) {
			throw new Error('Password must be 8 characters with at least 1 number!');
		}
		const password = await bcrypt.hash(args.password, 10);
		const user = await db.mutation.createUser(
			{
				data: {
					...args,
					password,
					permissions: 'FREE', // default permission for user is FREE tier
				},
			},
			info,
		);
		const token = await jwt.sign({ userId: user.id }, process.env.APP_SECRET);
		// adding that token to the cookie bc its neighborly
		response.cookie('token', token, {
			httpOnly: true,
			maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year cookie
		});

		return user;
	},
	async firebaseAuth(parent, args, ctx, info) {
		const { uid } = await verifyIdToken(args.idToken);
		const { providerData } = await getUserRecord(uid);
		const { email, displayName, photoURL, phoneNumber } = providerData[0];
		// check to see if user already exists in our db
		let user = await ctx.db.query.user({
			where: { email },
		});
		if (!user) {
			let nameArray = displayName.split(' ');
			user = await ctx.db.mutation.createUser(
				{
					data: {
						firstName: nameArray[0],
						lastName: nameArray[1] || '',
						email: email,
						password: 'firebaseAuth',
						img: { create: { img_url: photoURL } },
						phone: phoneNumber || null,
						imageThumbnail: photoURL || '',
						imageLarge: photoURL || '',
						permissions: 'FREE',
					},
				},
				`{id firstName email}`,
			);
			await setUserClaims(uid, { id: user.id, admin: false });
		}
		const session = await createUserToken(args, ctx);
		const token = await jwt.sign({ userId: user.id }, process.env.APP_SECRET);
		ctx.response.cookie('token', token, {
			httpOnly: true,
			maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year long cookie bc why not. FIGHT ME
		});

		return { token, user };
	},
	async signin(parent, { email, password }, { db, response }, info) {
		const user = await db.query.user({ where: { email } });
		if (!user) {
			throw new Error(`No such user found for email ${email}`);
		}
		const valid = await bcrypt.compare(password, user.password);
		if (!valid) {
			throw new Error('Invalid Password!');
		}
		const token = await jwt.sign({ userId: user.id }, process.env.APP_SECRET);
		// attach token to cookie even if that seems kinda obvious
		response.cookie('token', token, {
			httpOnly: true,
			maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year long cookie bc why not. FIGHT ME
		});

		return user;
	},
	signout(parent, args, { response }, info) {
		response.clearCookie('token');
		response.clearCookie('session');
		response.clearCookie('userId');
		return { message: 'Goodbye!' };
	},
	async requestReset(parent, args, { db }, info) {
		const user = await db.query.user({ where: { email: args.email } });
		if (!user) {
			throw new Error(`No such user found for email ${args.email}`);
		}
		// get a random string of numbers/letters
		const random = await randomBytes(20);
		// turn that random string into a hex number
		const resetToken = random.toString('hex');
		const resetTokenExpiry = Date.now() + 3600000; // 1 hr from now
		const res = await db.mutation.updateUser({
			where: { email: args.email },
			data: { resetToken, resetTokenExpiry },
		});
		console.log(res, resetToken); // just to check and make sure the resetToken and expiry are getting set
		const mailRes = await transport.sendMail({
			from: 'support@up4.life',
			to: user.email,
			subject: 'Your Password Reset Token',
			html: formatEmail(`Your Password Reset Token is here!
		  \n\n
		  <a href="${process.env.FRONTEND_URL}/reset?resetToken=${resetToken}">Click Here to Reset</a>`),
		});
		// this is the SMTP Holden has setup that we can use to send emails once we go into production (have a hard cap of 100 emails/month though)
		// const mailRes = await client.sendEmail({
		// 	From: 'support@up4.life',
		// 	To: `${user.email}`,
		// 	Subject: 'Your Password Reset Token!',
		// 	HtmlBody: makeANiceEmail(`Your Password Reset Token is here!
		//   \n\n
		//   <a href="${process.env.FRONTEND_URL}/reset?resetToken=${resetToken}">Click Here to Reset</a>`)
		// });
		return { message: 'Thanks!' };
	},
	async updateDefaultImage(parent, { id }, { db, request }, info) {
		const { userId, user } = request;
		if (!userId) throw new Error('You must be logged in!');

		return db.mutation.updateUser(
			{
				where: {
					id: user.id,
				},
				data: {
					img: {
						update: [
							{
								where: {
									id,
								},
								data: {
									default: true,
								},
							},
						],
						updateMany: [
							{
								where: {
									id_not: id,
								},
								data: {
									default: false,
								},
							},
						],
					},
				},
			},
			info,
		);
	},

	async updateLocation(parent, { city }, { db, request }, info) {
		const { userId, user } = request;
		if (!userId) throw new Error('You must be logged in!');

		return db.mutation.updateUser(
			{
				where: {
					id: user.id,
				},
				data: {
					location: city,
				},
			},
			info,
		);
	},
	async resetPassword(parent, args, { db, response }, info) {
		if (args.password !== args.confirmPassword) {
			throw new Error('Passwords must match!');
		}
		const [ user ] = await db.query.users({
			where: {
				resetToken: args.resetToken,
				resetTokenExpiry_gte: Date.now() - 3600000, // make sure reset Token is still within 1hr time limit
			},
		});
		if (!user) {
			throw new Error('This token is either invalid or expired');
		}
		const password = await bcrypt.hash(args.password, 10);
		// removed token and expiry fields from user once updated
		const updatedUser = await db.mutation.updateUser({
			where: { email: user.email },
			data: {
				password,
				resetToken: null,
				resetTokenExpiry: null,
			},
		});
		const token = jwt.sign({ userId: updatedUser.id }, process.env.APP_SECRET);
		// put new token onto cookie bc i said so
		response.cookie('token', token, {
			httpOnly: true,
			maxAge: 1000 * 60 * 60 * 24 * 365,
		});
		return updatedUser;
	},
	async createOrder(parent, args, ctx, info) {
		// Check user's login status
		const { userId, user } = ctx.request;
		if (!userId) throw new Error('You must be signed in to complete this order.');

		// Check user's subscription status
		if (user.permissions === args.subscription) {
			throw new Error(`User already has ${args.subscription} subscription`);
		}

		// Create new stripe customer if user is not one already
		let customer;
		if (!user.stripeCustomerId) {
			customer = await stripe.customers.create({
				email: user.email,
				source: args.token,
			});
		}

		// Create a subscription if user does not have one already
		let subscription;
		if (!user.stripeSubscriptionId) {
			subscription = await stripe.subscriptions.create({
				customer: user.stripeCustomerId || customer.id,
				items: [
					{
						plan:
							user.subscription === 'MONTHLY'
								? 'plan_EYPPZzmOjy3P3I'
								: 'plan_EYPg6RkTFwJFRA',
					},
				],
			});
		} else {
			subscription = await stripe.subscriptions.retrieve(user.stripeSubscriptionId);
			await stripe.subscriptions.update(user.stripeSubscriptionId, {
				cancel_at_period_end: false,
				items: [
					{
						id: subscription.items.data[0].id,
						plan:
							args.subscription === 'MONTHLY'
								? 'plan_EYPPZzmOjy3P3I'
								: 'plan_EYPg6RkTFwJFRA',
					},
				],
			});
		}

		// Update user's permission type
		ctx.db.mutation.updateUser({
			data: {
				permissions: args.subscription,
				stripeSubscriptionId: subscription ? subscription.id : user.stripeSubscriptionId,
				stripeCustomerId: customer ? customer.id : user.stripeCustomerId,
			},
			where: {
				id: user.id,
			},
		});

		return {
			message: 'Thank You',
		};
	},
	async cancelSubscription(parent, args, ctx, info) {
		// Check user's login status
		const { userId, user } = ctx.request;
		if (!userId) throw new Error('You must be signed in to complete this order.');

		if (!user.stripeCustomerId || !user.stripeSubscriptionId) {
			throw new Error('User has no stripe customer Id or subscription Id');
		}

		const canceled = await stripe.subscriptions.del(user.stripeSubscriptionId, {
			invoice_now: true,
			prorate: true,
		});

		// Update user's permission type
		return ctx.db.mutation.updateUser(
			{
				data: {
					permissions: 'FREE',
					stripeSubscriptionId: null,
				},
				where: {
					id: user.id,
				},
			},
			info,
		);
	},
	async internalPasswordReset(parent, args, { db, request, response }, info) {
		if (args.newPassword1 !== args.newPassword2) {
			throw new Error('New passwords must match!');
		}
		const { user } = request;
		if (!user) {
			throw new Error('You must be logged in!');
		}
		// compare oldpassword to password from user object
		const samePass = await bcrypt.compare(args.oldPassword, user.password);
		if (!samePass) throw new Error('Incorrect password, please try again.');
		const newPassword = await bcrypt.hash(args.newPassword1, 10);
		// update password
		const updatedUser = await db.mutation.updateUser({
			where: { id: user.id },
			data: {
				password: newPassword,
			},
		});
		const token = jwt.sign({ userId: updatedUser.id }, process.env.APP_SECRET);
		// put new token onto cookie so that any other session opened with previous pass is no invalidated
		response.cookie('token', token, {
			httpOnly: true,
			maxAge: 1000 * 60 * 60 * 24 * 365,
		});
		return updatedUser;
	},
	async addEvent(parent, { event }, { db, request }, info) {
		const { userId, user } = request;
		if (!userId) throw new Error('You must be signed in to add an event.');
		if (user.permissions === 'FREE' && user.events.length >= 10)
			throw new Error('You have reached maximum saved events for FREE account.');

		const [ existingEvents ] = await db.query.events({
			where: {
				AND: [
					{
						venue: event.venue,
					},
					{
						title: event.title,
					},
				],
			},
		});
		let eventId = -1;
		if (existingEvents) {
			eventId = existingEvents.id;

			const [ alreadySaved ] = user.events.filter(ev => ev.id === eventId);
			if (alreadySaved) {
				throw new Error("You've already saved that event!");
			}
		}
		return db.mutation.upsertEvent(
			{
				where: {
					id: eventId,
				},
				update: {
					attending: {
						connect: {
							id: user.id,
						},
					},
				},
				create: {
					title: event.title,
					url: event.url,
					venue: event.venue,
					description: event.description,
					times: { set: event.times },
					image_url: event.image_url,
					address: event.address,
					city: event.city,
					lat: event.lat,
					long: event.long,
					attending: {
						connect: {
							id: user.id,
						},
					},
					genre: event.genre,
				},
			},
			info,
		);
	},
	async deleteEvent(parent, args, { db, request }, info) {
		const { userId } = request;
		if (!userId) throw new Error('You must be signed in to add delete an event.');

		return await db.mutation.updateUser(
			{
				where: { id: userId },
				data: {
					events: {
						disconnect: {
							id: args.eventId, // remove event from user's events and remove user from event's attending
						},
					},
				},
			},
			info,
		);
	},
	async updateUser(parent, args, { request, db }, info) {
		const { user } = request;
		if (!user) throw new Error('You must be logged in to update your profile!');
		const updated = await db.mutation.updateUser(
			{
				where: { id: user.id },
				data: { ...args.data },
			},
			info,
		);

		return updated;
	},
	async verifyPhone(parent, args, { request, db }, info) {
		const { user } = request;
		if (!user) throw new Error('You must be logged in to update your profile!');

		const update = await db.mutation.updateUser({
			where: { id: user.id },
			data: { phone: args.phone },
		});

		authy.phones().verification_start(args.phone, '1', 'sms', (err, res) => {
			if (err) {
				console.log(err);
				throw new Error(err);
			}
			return { message: 'Phone verification code sent!' };
		});
	},
	checkVerify(parent, args, { request, db }, info) {
		const { user } = request;
		if (!user) throw new Error('You must be logged in to update your profile!');

		authy.phones().verification_check(args.phone, '1', args.code, async (err, res) => {
			if (err) {
				throw new Error('Phone verification unsuccessful');
			}
			let user = await db.mutation.updateUser({
				where: { id: user.id },
				data: { verified: true },
			});
			if (user) {
				return { message: 'Phone successfully verified!' };
			}
		});
	},
};

module.exports = Mutation;
