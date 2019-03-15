const { transport, report } = require('../../mail');

module.exports = {
	async blockUser(parent, args, { request, db }, info) {
		const { userId } = request;

		// current user need to login
		if (!userId) throw new Error('You need to login to block a user');

		// should not block yourself, that's suicidal
		if (userId === args.id) throw new Error('Please do not block yourself');

		// query user to block
		const blockedUser = await db.query.user({
			where: {
				id: args.id,
			},
		});

		// check if user to block exist
		if (!blockedUser) throw new Error('User to block does not exist');

		// query current user
		const currentUser = await db.query.user(
			{
				where: {
					id: userId,
				},
			},
			`{ liked { id } }`,
		);

		if (currentUser.liked.findIndex(user => user.id === args.id) !== -1) {
			return db.mutation.updateUser(
				{
					where: {
						id: userId,
					},
					data: {
						blocked: {
							connect: {
								id: args.id,
							},
						},
						liked: {
							disconnect: {
								id: args.id,
							},
						},
					},
				},
				info,
			);
		} else {
			return db.mutation.updateUser(
				{
					where: {
						id: userId,
					},
					data: {
						blocked: {
							connect: {
								id: args.id,
							},
						},
					},
				},
				info,
			);
		}
	},
	async likeUser(parent, args, { request, db }, info) {
		const { userId } = request;

		// current user need to login
		if (!userId) throw new Error('You need to login to like a user');

		// should not like yourself, that's creepy
		if (userId === args.id) throw new Error('Go find someone else to like, really!');

		// query user to like
		const userToLike = await db.query.user(
			{
				where: {
					id: args.id,
				},
			},
			`{ id blocked { id } }`,
		);

		// check if user to like exist
		if (!userToLike) throw new Error('Cannot find user to like');

		// check if current user is in user to like blocked list
		if (userToLike.blocked.findIndex(user => user.id === userId) !== -1)
			throw new Error('You have been blocked by the user');

		// query current user
		const currentUser = await db.query.user(
			{
				where: {
					id: userId,
				},
			},
			`{blocked {id} }`,
		);

		// check if user to like is on current user block list
		if (currentUser.blocked.findIndex(user => user.id === args.id) !== -1)
			throw new Error('User to like is on your blocked list');

		// update current user liked list
		return db.mutation.updateUser(
			{
				where: {
					id: userId,
				},
				data: {
					liked: {
						connect: {
							id: args.id,
						},
					},
				},
			},
			info,
		);
	},
	async unblockUser(parent, args, { request, db }, info) {
		const { userId } = request;

		// current user need to login
		if (!userId) throw new Error('You need to login to unblock a user');

		// query current user
		const currentUser = await db.query.user(
			{
				where: {
					id: userId,
				},
			},
			`{ blocked { id } }`,
		);

		// check if user to like is on current user liked list
		if (currentUser.blocked.findIndex(user => user.id === args.id) === -1)
			throw new Error('User is not on your blocked list');

		// update current user liked list
		return db.mutation.updateUser(
			{
				where: {
					id: userId,
				},
				data: {
					blocked: {
						disconnect: {
							id: args.id,
						},
					},
				},
			},
			info,
		);
	},
	async unlikeUser(parent, args, { request, db }, info) {
		const { userId } = request;

		// current user need to login
		if (!userId) throw new Error('You need to login to unblock a user');

		// query current user
		const currentUser = await db.query.user(
			{
				where: {
					id: userId,
				},
			},
			`{ liked { id } }`,
		);

		if (currentUser.liked.findIndex(user => user.id === args.id) === -1)
			throw new Error('User is not in your liked list');

		// update current user liked list
		return db.mutation.updateUser(
			{
				where: {
					id: userId,
				},
				data: {
					liked: {
						disconnect: {
							id: args.id,
						},
					},
				},
			},
			info,
		);
	},
	async reportUser(parent, { id, message }, { request }, info) {
		const { userId } = request;
		// current user need to login
		if (!userId) throw new Error('You need to login to report a user');

		// send mail to Support Team at Up4
		const mailRes = await transport.sendMail({
			from: 'reportUser@up4.life',
			to: 'support@up4.life',
			subject: `Report User ID: ${id}`,
			html: formatEmail(`User Reported for Inappropriate Behavior
		  \n\n
      The reporting User's account of the problem is as follows: 
      \n
      "${message}"`),
		});

		// check to see if reported user is among the 'likes' for our currentUser
		const currentUser = await db.query.user(
			{
				where: {
					id: userId,
				},
			},
			`{ liked { id } }`,
		);

		if (currentUser.liked.findIndex(user => user.id === args.id) !== -1) {
			await db.mutation.updateUser(
				{
					where: {
						id: userId,
					},
					data: {
						blocked: {
							connect: {
								id: args.id,
							},
						},
						liked: {
							disconnect: {
								id: args.id,
							},
						},
					},
				},
				info,
			);
		} else {
			await db.mutation.updateUser(
				{
					where: {
						id: userId,
					},
					data: {
						blocked: {
							connect: {
								id: args.id,
							},
						},
					},
				},
				info,
			);
		}

		return {
			message:
				'The user has been blocked and reported. We will review your complaint and contact you if further information is needed. Please contact support@up4.life if anything else is needed. m Sincerely, \n The Up4 Support Team',
		};
	},
};
