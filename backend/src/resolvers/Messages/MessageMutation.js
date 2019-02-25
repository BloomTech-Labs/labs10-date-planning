module.exports = {
	async createChat(parent, args, { request, db }, info) {
		const { user } = request;
		if (!user) throw new Error('You must be logged in to start a conversation!');

		// check to see if chat between users already exists
		let [chat] = await db.query.chats(
			{
				where: { AND: [{ users_some: { id: user.id } }, { users_some: { id: args.id } }] }
			},
			info
		);
		if (chat) throw new Error('Conversation between these users already exists');

		// create new chat
		chat = await db.mutation.createChat(
			{
				data: {
					users: {
						connect: [{ id: user.id }, { id: args.id }]
					},
					messages: {
						create: [{ text: args.message, from: { connect: { id: user.id } } }]
					}
				}
			},
			info
		);

		return chat;
	},
	async deleteChat(parent, args, { request, db }, info) {
		// simple chat delete to erase entire conversation
		const { user } = request;
		if (!user) throw new Error('You must be logged in to start a conversation!');

		const success = await db.mutation.deleteChat({
			where: { id: args.id }
		});

		// console.log(success);
		return { message: 'Chat successfully erased' };
	}
};
