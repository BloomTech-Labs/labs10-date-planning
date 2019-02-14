require('dotenv').config({ path: '.env' });
const db = require('./db');
const bcrypt = require('bcryptjs');
let seedUsers = require('./seedUsers');
// WARNING WARNING WARNING WARNING WARNING WARNING WARNING
// gotta seed 100 users at a time because docker doesn't like you otherwise
seedUsers = seedUsers.slice(0, 100);

// this is where we plant the teeny tiny little seeds for our cute lil users
const seedDatabase = async () => {
	Promise.all(
		seedUsers.map(async user => {
			delete user.id;
			// don't need the IDs and the enum Gender needs to be uppercased bc GRAPHQL IS EXCITING
			user.gender = user.gender.toUpperCase();
			const password = await bcrypt.hash(user.password, 10);
			try {
				// when a mommy user and a daddy user love each other very very much, sometimes they invoke a mutation called
				// createUser and that's where lil baby users come from. thank you for watching my TED talk
				const response = await db.mutation.createUser({
					data: {
						...user,
						password,
						permissions: { set: ['FREE'] }
					}
				});
				return response;
			} catch (err) {
				throw new Error(err.message);
			}
		})
	);
};

// WARNING MATURE CONTENT BELOW. SHIELD YOUR EYES IF YOU CHERISH YOUR INNOCENCE
seedDatabase();
