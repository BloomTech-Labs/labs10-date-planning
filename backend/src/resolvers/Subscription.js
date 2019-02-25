const jwt = require('jsonwebtoken');

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
  }
}

module.exports = Subscription;