const Subscription = {
  myChat: {
    subscribe(parent, args, ctx, info) {
      return ctx.db.subscription.chat(
        {
          where: {
            node: {
              users_some: {
                id: args.id
              }
            }
          }
        }
        , info)
    }
  },
  myMessages: {
    async subscribe(parent, args, ctx, info) {
      const [ chats ] = await ctx.db.query.users({
        where: {
          id: args.id
        }
      }, `{chats {id} }`)

      const chatIds = chats.chats.map(chat => chat.id)

      return ctx.db.subscription.directMessage({
        where: {
          node: {
            chat: {
              users_some: {
                id: args.id
              }
            }
          }
        }
      }, info)
    }
  }
}

module.exports = Subscription;