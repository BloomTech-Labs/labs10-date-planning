require('dotenv').config({ path: '.env' });
const db = require('./db');
const bcrypt = require('bcryptjs');
let seedUsers = require('./seedUsers');

seedUsers = seedUsers.slice(0, 100);

const seedDatabase = async () => {
	Promise.all(
		seedUsers.map(async user => {
			delete user.id;
			user.gender = user.gender.toUpperCase();
			const password = await bcrypt.hash(user.password, 10);
			try {
				const response = await db.mutation.createUser({
					data: {
						...user,
						password,
						permissions: 'FREE'
					}
				});
				return response;
			} catch (err) {
				throw new Error(err.message);
			}
		})
	);
};

seedDatabase();
