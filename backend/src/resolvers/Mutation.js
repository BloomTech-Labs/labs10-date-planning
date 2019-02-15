const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { randomBytes } = require('crypto');
const { transport, formatEmail } = require('../mail');
const stripe = require('../stripe');

const Mutation = {
	async createEvent(parent, args, { db }, info) {
		// if (!ctx.response.userId) {
		// 	throw new Error('you must be logged in to create events');
		// }
		const event = await db.mutation.createEvent(
			{
				data: { ...args }
			},
			info
		);
		return event;
	},
	async signup(parent, args, { db, response }, info) {
		// just in case some bozo puts their email in with capitalization for some reason
		args.email = args.email.toLowerCase();
		const password = await bcrypt.hash(args.password, 10);
		const user = await db.mutation.createUser(
			{
				data: {
					...args,
					password,
					permissions: { set: ['FREE'] } // default permission for user is FREE tier
				}
			},
			info
		);
		const token = await jwt.sign({ userId: user.id }, process.env.APP_SECRET);
		// adding that token to the cookie bc its neighborly
		response.cookie('token', token, {
			httpOnly: true,
			maxAge: 1000 * 60 * 60 * 24 * 365 // 1 year cookie
		});

		return user;
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
			maxAge: 1000 * 60 * 60 * 24 * 365 // 1 year long cookie bc why not. FIGHT ME
		});

		return user;
	},
	signout(parent, args, { response }, info) {
		response.clearCookie('token');
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
			data: { resetToken, resetTokenExpiry }
		});
		console.log(res); // just to check and make sure the resetToken and expiry are getting set
		const mailRes = await transport.sendMail({
			from: 'support@up4.life',
			to: user.email,
			subject: 'Your Password Reset Token',
			html: formatEmail(`Your Password Reset Token is here!
		  \n\n
		  <a href="${process.env.FRONTEND_URL}/reset?resetToken=${resetToken}">Click Here to Reset</a>`)
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
		return { body: 'Thanks!' };
	},
	async resetPassword(parent, args, { db, response }, info) {
		if (args.password !== args.confirmPassword) {
			throw new Error('Passwords must match!');
		}
		const [user] = await db.query.users({
			where: {
				resetToken: args.resetToken,
				resetTokenExpiry_gte: Date.now() - 3600000 // make sure reset Token is still within 1hr time limit
			}
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
				resetTokenExpiry: null
			}
		});
		const token = jwt.sign({ userId: updatedUser.id }, process.env.APP_SECRET);
		// put new token onto cookie bc i said so
		response.cookie('token', token, {
			httpOnly: true,
			maxAge: 1000 * 60 * 60 * 24 * 365
		});
		return updatedUser;
	},
	deleteEvent(parent, args, { db }, info) {
		// just a test mutation for removing the malformed events I was adding
		return db.mutation.deleteEvent(
			{
				...args
			},
			info
		);
	},
	async updatePermissions(parent, args, { request, db }, info) {
		// will be used to upgrade user from FREE tier to monthly/yearly subscription plan

		if (!request.userId) {
			throw new Error('you must be logged in to create events');
		}
		const user = await db.query.user(
			{
				where: { id: request.userId }
			},
			info
		);
		// if somehow user makes it to backend when they shouldn't, we can have a secondary check to make sure they dont already have a plan
		if (user.permissions.includes(args.permission)) {
			throw new Error(`User already has ${args.permissions} level access`);
		}
		return db.mutation.updateUser(
			{
				data: {
					permissions: {
						set: args.permissions
					}
				},
				where: {
					id: user.id
				}
			},
			info
		);
	},
	async createOrder(parent, args, ctx, info) {
		// Check user's login status
		const { userId } = ctx.request;
		if (!userId) throw new Error('You must be signed in to complete this order.');

		// Get user's info
		const user = await ctx.db.query.user(
			{ where: { id: userId } },
			`
		{id firstName lastName email permissions}`
		);

		console.log({ user });

		// Check user's subscription status
		if (user.permissions[0] === args.subscription) {
			throw new Error(`User already has ${args.subscription} subscription`);
		} else if (user.permissions[0] === 'YEARLY') {
			throw new Error(`User already has the highest level of ${args.subscription} subscription`);
		}

		// Charge the credit card
		const amount = args.subscription === 'MONTHLY' ? 999 : 2999;
		const charge = await stripe.charges.create({
			amount,
			currency: 'USD',
			source: args.token
		});

		// Record the order
		const order = await ctx.db.mutation.createOrder(
			{
				data: {
					total: amount,
					charge: 'Subscription',
					subscription: args.subscription,
					user: {
						connect: {
							id: user.id
						}
					}
				}
			},
			info
		);

		// Update user's permission type
		ctx.db.mutation.updateUser({
			data: {
				permissions: {
					set: [args.subscription]
				}
			},
			where: {
				id: user.id
			}
		});

		return order;
	},
	async internalPasswordReset(parent, args, { db, request }, info) {
		if (args.newPassword1 !== args.newPassword2) {
			throw new Error('New passwords must match!');
		}
		// check to make sure user is logged in
		const user = await db.query.user({
			where: { id: request.userId }
		});
		if (!user) {
			throw new Error('You must be logged in!');
		}
		// compare oldpassword to password from user object
		const samePass = await bcrypt.compare(args.oldPassword, user.password);
		if (!samePass) throw new Error('Incorrect password, please try again.');
		// update password
		const updatedUser = await db.mutation.updateUser({
			where: { id: user.id },
			data: {
				password: args.newPassword1
			}
		});
		const token = jwt.sign({ userId: updatedUser.id }, process.env.APP_SECRET);
		// put new token onto cookie so that any other session opened with previous pass is no invalidated
		response.cookie('token', token, {
			httpOnly: true,
			maxAge: 1000 * 60 * 60 * 24 * 365
		});
		return updatedUser;
	}
};

module.exports = Mutation;
