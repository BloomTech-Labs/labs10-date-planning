const moment = require('moment');

module.exports = {
	async createChat(parent, args, { request, db }, info) {
		const { user } = request;

		// User should logged in to create chat
		if (!user) throw new Error('You must be logged in to start a conversation!');

		// FREE users can only send 10 messages per week
		if (user.permissions === 'FREE') {
			const sentMessages = await db.query.directMessages({
				where: {
					AND: [
						{ from: { id: user.id } },
						{ createdAt_gte: moment().startOf('isoWeek') },
					],
				},
			});

			if (sentMessages.length > 20)
				throw new Error('You have reached 20 DMs per week for FREE account.');
		}

		// check to see if chat between users already exists
		let [ chat ] = await db.query.chats(
			{
				where: {
					AND: [ { users_some: { id: user.id } }, { users_some: { id: args.id } } ],
				},
			},
			info,
		);
		if (chat) throw new Error('Conversation between these users already exists');

		// create new chat
		chat = await db.mutation.createChat(
			{
				data: {
					users: {
						connect: [ { id: user.id }, { id: args.id } ],
					},
					messages: {
						create: [ { text: args.message, from: { connect: { id: user.id } } } ],
					},
				},
			},
			info,
		);

		return chat;
	},
	async sendMessage(parent, { id, message }, { request, db }, info) {
		const { user } = request;

		// User should logged in to create chat
		if (!user) throw new Error('You must be logged in to send a message!');

		// FREE users can only send 20 messages per week
		if (user.permissions === 'FREE') {
			const sentMessages = await db.query.directMessages({
				where: {
					AND: [
						{ from: { id: user.id } },
						{ createdAt_gte: moment().startOf('isoWeek') },
					],
				},
			});

			if (sentMessages.length >= 20)
				throw new Error('You have reached 20 DMs per week for FREE account.');
		}

		let [ chat ] = await db.query.chats({
			where: {
				AND: [ { users_some: { id: user.id } }, { users_some: { id } } ],
			},
		});

		if (!chat) {
			return db.mutation.createChat(
				{
					data: {
						users: { connect: [ { id: user.id }, { id } ] },
						messages: {
							create: [ { text: message, from: { connect: { id: user.id } } } ],
						},
					},
				},
				info,
			);
		} else {
			return db.mutation.updateChat(
				{
					where: {
						id: chat.id,
					},
					data: {
						messages: {
							create: [ { text: message, from: { connect: { id: user.id } } } ],
						},
					},
				},
				info,
			);
		}
	},
	async deleteChat(parent, args, { request, db }, info) {
		// simple chat delete to erase entire conversation
		const { user } = request;
		if (!user) throw new Error('You must be logged in to start a conversation!');

		const success = await db.mutation.deleteChat({
			where: { id: args.id },
		});

		return { message: 'Chat successfully erased' };
	},
	async updateSeenMessage(parent, { chatId }, { request, db }, info) {
		const { user, userId } = request;

		let updated = await db.mutation.updateManyDirectMessages({
			where: {
				chat: {
					id: chatId,
				},
				seen: false,
				from: {
					id_not: userId,
				},
			},
			data: {
				seen: true,
			},
		});
		return db.query.chat(
			{
				where: { id: chatId },
			},
			info,
		);
	},
	async markAllAsSeen(parent, args, { request, db }, info) {
		const { user, userId } = request;

		if (!user) throw new Error('You must be logged in to start a conversation!');

		const chat = db.query.chat({
			where: {
				id: args.chatId,
			},
		});

		if (!chat) throw new Error('Chat does not exist');

		await db.mutation.updateManyDirectMessages({
			where: {
				AND: [
					{ chat: { id: args.chatId } },
					{ from: { id_not: userId } },
					{ seen: false },
				],
			},
			data: {
				seen: true,
			},
		});

		return db.mutation.updateChat({
			where: {
				id: args.chatId,
			},
			data: {},
		});
	},
};
