module.exports = {
	async createChat(parent, args, { request, db }, info) {
		const { user } = request;
		if (!user) throw new Error('You must be logged in to start a conversation!');

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
		if (!user) throw new Error('You must be logged in to send a message!');

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
						messages: { create: [ { text: message, from: { connect: { id } } } ] },
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
							create: [ { text: message, from: { connect: { id } } } ],
						},
					},
				},
				info,
			);
		}
		// return db.mutation.createDirectMessage({
		// 	data: {
		// 		text: message,
		// 		from : { connect: {id}},
		// 		chat: {
		// 			connect: {id: chat.id}
		// 		}
		// 	}
		// })

		// check to see if chat between users already exists
		// check to see if chat between users already exists
		// let [ chat ] = await db.query.chats({
		// 	where: { AND: [ { users_some: { id: user.id } }, { users_some: { id: args.id } } ] },
		// });

		// // if (!chat) throw new Error('No previous conversation between these users');
		// if (!chat) {

		// }
		// // create new chat
		// const message = await db.mutation.createDirectMessage(
		// 	{
		// 		data: {
		// 			text: args.message,
		// 			from: {
		// 				connect: {
		// 					id: user.id,
		// 				},
		// 			},
		// 			chat: {
		// 				connect: {
		// 					id: chat.id,
		// 				},
		// 			},
		// 		},
		// 	},
		// 	info,
		// );

		// return message;
	},
	async deleteChat(parent, args, { request, db }, info) {
		// simple chat delete to erase entire conversation
		const { user } = request;
		if (!user) throw new Error('You must be logged in to start a conversation!');

		const success = await db.mutation.deleteChat({
			where: { id: args.id },
		});

		// console.log(success);
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
};
