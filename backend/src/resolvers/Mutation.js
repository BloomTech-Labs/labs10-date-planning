const { randomBytes } = require("crypto");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const axios = require("axios");
const { transport, formatEmail } = require("../mail");
const stripe = require("../stripe");
const {
  createUserToken,
  verifyIdToken,
  getUserRecord,
  setUserClaims
} = require("../firebase/firebase");

const Mutation = {
  async signup(parent, args, { db, response }, info) {
    // just in case some bozo puts their email in with capitalization for some reason
    args.email = args.email.toLowerCase();
    if (!/^(?=.*\d).{8,}$/.test(args.password)) {
      throw new Error("Password must be 8 characters with at least 1 number!");
    }
    const password = await bcrypt.hash(args.password, 10);
    const user = await db.mutation.createUser(
      {
        data: {
          ...args,
          password,
          permissions: { set: ["FREE"] } // default permission for user is FREE tier
        }
      },
      info
    );
    const token = await jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    // adding that token to the cookie bc its neighborly
    response.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365 // 1 year cookie
    });

    return user;
  },
  async firebaseAuth(parent, args, ctx, info) {
    const { uid, email } = await verifyIdToken(args.idToken);
    const firebaseUser = await getUserRecord(uid);
    const { displayName } = firebaseUser;
    // check to see if user already exists in our db
    let user = await ctx.db.query.user({
      where: { email }
    });
    if (!user) {
      user = await ctx.db.mutation.createUser(
        {
          data: {
            firstName: displayName,
            email,
            password: "firebaseAuth",
            lastName: ""
          }
        },
        `id firstName email`
      );
      await setUserClaims(uid, { id: user.id, admin: false });
    }
    const token = await createUserToken(args, ctx);
    ctx.response.cookie("userId", user.id, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365 // 1 year long cookie bc why not. FIGHT ME
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
      throw new Error("Invalid Password!");
    }
    const token = await jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    // attach token to cookie even if that seems kinda obvious
    response.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365 // 1 year long cookie bc why not. FIGHT ME
    });

    return user;
  },
  signout(parent, args, { response }, info) {
    response.clearCookie("token");
    response.clearCookie("session");
    response.clearCookie("userId");
    return { message: "Goodbye!" };
  },
  async requestReset(parent, args, { db }, info) {
    const user = await db.query.user({ where: { email: args.email } });
    if (!user) {
      throw new Error(`No such user found for email ${args.email}`);
    }
    // get a random string of numbers/letters
    const random = await randomBytes(20);
    // turn that random string into a hex number
    const resetToken = random.toString("hex");
    const resetTokenExpiry = Date.now() + 3600000; // 1 hr from now
    const res = await db.mutation.updateUser({
      where: { email: args.email },
      data: { resetToken, resetTokenExpiry }
    });
    console.log(res); // just to check and make sure the resetToken and expiry are getting set
    const mailRes = await transport.sendMail({
      from: "support@up4.life",
      to: user.email,
      subject: "Your Password Reset Token",
      html: formatEmail(`Your Password Reset Token is here!
		  \n\n
		  <a href="${
        process.env.FRONTEND_URL
      }/reset?resetToken=${resetToken}">Click Here to Reset</a>`)
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
    return { message: "Thanks!" };
  },
  async updateImage(
    parent,
    { thumbnail, image },
    { db, response, request },
    info
  ) {
    const user = await db.query.user({
      where: { id: request.userId }
    });
    if (!user) {
      throw new Error("You must be logged in!");
    }

    return db.mutation.updateUser(
      {
        where: {
          id: user.id
        },
        data: {
          imageThumbnail: thumbnail,
          imageLarge: image
        }
      },
      info
    );
  },
  async updateLocation(parent, { city }, { db, request }, info) {
    const user = await db.query.user({
      where: { id: request.userId }
    });
    if (!user) {
      throw new Error("You must be logged in!");
    }
    return db.mutation.updateUser(
      {
        where: {
          id: user.id
        },
        data: {
          location: city
        }
      },
      info
    );
  },
  async resetPassword(parent, args, { db, response }, info) {
    if (args.password !== args.confirmPassword) {
      throw new Error("Passwords must match!");
    }
    const [user] = await db.query.users({
      where: {
        resetToken: args.resetToken,
        resetTokenExpiry_gte: Date.now() - 3600000 // make sure reset Token is still within 1hr time limit
      }
    });
    if (!user) {
      throw new Error("This token is either invalid or expired");
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
    response.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365
    });
    return updatedUser;
  },
  async createOrder(parent, args, ctx, info) {
    // Check user's login status
    const { userId } = ctx.request;
    if (!userId)
      throw new Error("You must be signed in to complete this order.");

    // Get user's info
    const user = await ctx.db.query.user(
      { where: { id: userId } },
      `
				{id firstName lastName email permissions stripeCustomerId stripeSubscriptionId}
			`
    );

    // Check user's subscription status
    // if (user.permissions[0] === args.subscription) {
    // 	throw new Error(`User already has ${args.subscription} subscription`);
    // } else if (user.permissions[0] === 'YEARLY') {
    // 	throw new Error(`User already has the highest level of ${args.subscription} subscription`);
    // }

		// Create a subscription if user does not have one already
		let subscription;
		if (!user.tripeSubscriptionId) {
			subscription = await stripe.subscriptions.create({
				customer: user.stripeCustomerId || customer.id,
				items: [
					{
						plan: user.permissions[0] === 'MONTHLY' ? 'plan_EYPPZzmOjy3P3I' : 'plan_EYPg6RkTFwJFRA'
					}
				]
			});
		} else {
			subscription = await stripe.subscriptions.retrieve(user.stripeSubscriptionId);
			await stripe.subscriptions.update(user.stripeSubscriptionId, {
				cancel_at_period_end: false,
				items: [
					{
						id: subscription.items.data[0].id,
						plan: args.subscription === 'MONTHLY' ? 'plan_EYPPZzmOjy3P3I' : 'plan_EYPg6RkTFwJFRA'
					}
				]
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
              user.permissions[0] === "MONTHLY"
                ? "plan_EYPPZzmOjy3P3I"
                : "plan_EYPg6RkTFwJFRA"
          }
        ]
      });
    } else {
      subscription = await stripe.subscriptions.retrieve(
        user.stripeSubscriptionId
      );
      await stripe.subscriptions.update(user.stripeSubscriptionId, {
        cancel_at_period_end: false,
        items: [
          {
            id: subscription.items.data[0].id,
            plan:
              args.subscription === "MONTHLY"
                ? "plan_EYPPZzmOjy3P3I"
                : "plan_EYPg6RkTFwJFRA"
          }
        ]
      });
    }

    // Charge the credit card
    const amount = args.subscription === "MONTHLY" ? 999 : 2999;
    // const charge = await stripe.charges.create({
    // 	amount,
    // 	currency: 'USD',

		// Record the order
		const order = await ctx.db.mutation.createOrder(
			{
				data: {
					total: amount,
					charge: '',
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
				},
				stripeSubscriptionId: subscription ? subscription.id : user.stripeSubscriptionId,
				stripeCustomerId: customer ? customer.id : user.stripeCustomerId
			},
			where: {
				id: user.id
			}
		});

		return order;
	},
	async cancelSubscription(parent, args, ctx, info) {
		// Check user's login status
		const { userId } = ctx.request;
		if (!userId) throw new Error('You must be signed in to complete this order.');

		// Get user's info
		const user = await ctx.db.query.user(
			{ where: { id: userId } },
			`
				{id email permissions stripeCustomerId stripeSubscriptionId}
			`
		);

		if (!user.stripeCustomerId || !user.stripeSubscriptionId) {
			throw new Error('User has no stripe customer Id or subscription Id');
		}

		const canceled = await stripe.subscriptions.del(
			user.stripeSubscriptionId, {
				invoice_now: true,
				prorate: true
			}
		);

		// Update user's permission type
		ctx.db.mutation.updateUser({
			data: {
				permissions: {
					set: ['FREE']
				},
				stripeSubscriptionId: null,
			},
			where: {
				id: user.id
			}
		});

		return {
			message: `Your subscription has been ${canceled.status} at the end of the billing period`
		}
	},
	async internalPasswordReset(parent, args, { db, request, response }, info) {
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
		const newPassword = await bcrypt.hash(args.newPassword1, 10);
		// update password
		const updatedUser = await db.mutation.updateUser({
			where: { id: user.id },
			data: {
				password: newPassword
			}
		});
		const token = jwt.sign({ userId: updatedUser.id }, process.env.APP_SECRET);
		// put new token onto cookie so that any other session opened with previous pass is no invalidated
		response.cookie('token', token, {
			httpOnly: true,
			maxAge: 1000 * 60 * 60 * 24 * 365
		});
		return updatedUser;
	},
	async addEvent(parent, args, { db, request }, info) {
		const { userId } = request;
		if (!userId) throw new Error('You must be signed in to add an event.');
		const user = await db.query.user(
			{ where: { id: userId } },
			`
				{id firstName lastName email permissions events { eventfulID }}
			`
		);
		if (user.permissions[0] === 'FREE' && user.events.length === 5) {
			throw new Error('You have reached the free tier limit');
		}
		const { data } = await axios.get(
			`https://app.ticketmaster.com/discovery/v2/events/${args.eventId}.json?apikey=${
				process.env.TKTMSTR_KEY
			}`
		);
		const [alreadySaved] = user.events.filter(event => event.eventfulID === data.id);
		if (alreadySaved) {
			throw new Error("You've already saved that event!");
		}

		let [event] = await db.query.events({
			where: { eventfulID: data.id }
		});
		if (!event) {
			// create the event if it doesnt exist
			const [img] = data.images.filter(img => img.ratio === '4_3');
			event = await db.mutation.createEvent({
				data: {
					eventfulID: data.id,
					title: data.name,
					url: data.url,
					location: data._embedded.venues[0].name,
					description: data.info,
					times: { set: [data.dates.start.dateTime] },
					image_url: img.url,
					attending: {
						connect: {
							id: user.id
						}
					}
				}
			});
		} else {
			await db.mutation.updateEvent(
				{
					data: {
						attending: {
							connect: {
								id: user.id
							}
						}
					},
					where: {
						id: event.id
					}
				},
				`{ attending { id }}`
			);
		}
		// finally, in either case we want to update the relationship to the event on the user obj
		// then connect the user to the event
		await db.mutation.updateUser({
			data: {
				events: {
					connect: {
						id: event.id
					}
				}
			},
			where: {
				id: user.id
			}
		});
		return user.permissions[0] === 'FREE'
			? { message: `You have used ${user.events.length + 1} of your 5 free events` }
			: { message: 'Event successfully added!' };
	}
};

module.exports = Mutation;
