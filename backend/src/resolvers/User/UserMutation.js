module.exports = {
  async blockUser(parent, args, { request, db }, info) {
    const { userId } = request

    // current user need to login
    if (!userId) throw new Error('You need to login to block a user')

    // query user to block
    const blockedUser = await db.query.user({
      where: {
        id: args.id
      }
    })

    // check if user to block exist
    if (!blockedUser) throw new Error('User to block does not exist')

    // update current user blocked list
    return db.mutation.updateUser({
      where: {
        id: userId
      },
      data: {
        blocked: {
          connect: {
            id: args.id
          }
        },
        liked: {
          disconnect: {
            id: args.id
          }
        }
      }
    }, info)
  },
  async likeUser(parent, args, { request, db }, info) {
    const { userId } = request

    // current user need to login
    if (!userId) throw new Error('You need to login to block a user')

    // query user to like
    const userToLike = await db.query.user({
      where: {
        id: args.id
      }
    }, `{ id blocked { id } }`)

    // check if user to like exist
    if (!userToLike) throw new Error('Cannot find user to like')

    // check if current user is in user to like blocked list
    if (userToLike.blocked.findIndex(user => user.id === userId) !== -1) throw new Error('You have been blocked by the user')

    // query current user
    const currentUser = await db.query.user({
      where: {
        id: userId
      }
    }, `{blocked {id} }`)
    
    // check if user to like is in current user block list
    if (currentUser.blocked.findIndex(user => user.id === args.id) !== -1) throw new Error('User to like is in your blocked list')

    // update current user liked list
    return db.mutation.updateUser({
      where: {
        id: userId
      },
      data: {
        liked: {
          connect: {
            id: args.id
          }
        }
      }
    }, info)
  },
};
