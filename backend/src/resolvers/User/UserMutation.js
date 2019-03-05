module.exports = {
  async blockUser(parent, args, { request, db }, info) {
    const { userId } = request

    // current user need to login
    if (!userId) throw new Error('You need to login to block a user')

    // check if user to block exist
    const blockedUser = await db.query.users({
      where: {
        id: args.id
      }
    })
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
        }
      }
    }, info)
  }
};
