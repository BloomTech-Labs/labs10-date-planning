const moment = require('moment');

module.exports = {
	getChat(parent, args, { request, db }, info) {
		// this is to find a specific chat by id
		const { user } = request;
		if (!user) throw new Error('You must be logged in to start a conversation!');

		return db.query.chat(
			{
				where: { id: args.id },
			},
			info,
		);
	},
	getUserChats(parent, args, { request, db }, info) {
		// this gets all of the chats that involve the logged in user
		const { user } = request;
		if (!user) throw new Error('You must be logged in to start a conversation!');

		return db.query.chats(
			{
				where: {
					users_some: { id: user.id },
				},
			},
			info,
		);
	},
	async getMessages(parent, { id }, { request, db }, info) {
		const { user } = request;
		if (!user) throw new Error('You must be logged in to start a conversation!');

		return db.query.chats(
			{
				where: {
					users_some: { id: user.id },
				},
			},
			`{messages {id text createdAt seen from { id firstName imageThumbnail dob gender}}}`,
		);
	},
	async getConversation(parent, args, { request, db }, info) {
		// this is to check if there is already a convo between logged in user and someone else
		const { user } = request;
		if (!user) throw new Error('You must be logged in to start a conversation!');

		const [ chat ] = await db.query.chats(
			{
				where: {
					AND: [ { users_some: { id: user.id } }, { users_some: { id: args.id } } ],
				},
			},
			info,
		);

		return chat;
	},
	async getMessageLeft(parent, args, { request, db }, info) {
		const { user } = request;

		// must logged in to access this query
		if (!user) throw new Error('You must be logged in to start a conversation!');

		if (user.permissions !== 'FREE') return 1000;
		const sentMessages = await db.query.directMessages({
			where: {
				AND: [ { from: { id: user.id } }, { createdAt_gte: moment().startOf('isoWeek') } ],
			},
		});

		return 20 - sentMessages.length;
	},
};
