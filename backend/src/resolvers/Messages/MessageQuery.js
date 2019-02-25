module.exports = {
	getChat(parent, args, { request, db }, info) {
		// this is to find a specific chat by id
		const { user } = request;
		if (!user) throw new Error('You must be logged in to start a conversation!');

		return db.query.chat(
			{
				where: { id: args.id }
			},
			info
		);
	},
	getUserChats(parent, args, { request, db }, info) {
		// this gets all of the chats that involve the logged in user
		const { user } = request;
		if (!user) throw new Error('You must be logged in to start a conversation!');

		return db.query.chats(
			{
				where: {
					users_some: { id: user.id }
				}
			},
			info
		);
	},
	async getConversation(parent, args, { request, db }, info) {
		// this is to check if there is already a convo between logged in user and someone else
		const { user } = request;
		if (!user) throw new Error('You must be logged in to start a conversation!');

		const [chat] = await db.query.chats(
			{
				where: { AND: [{ users_some: { id: user.id } }, { users_some: { id: args.id } }] }
			},
			info
		);
		// console.log(chat);
		return chat;
	}
};
