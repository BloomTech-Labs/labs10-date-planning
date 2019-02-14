const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

require('dotenv').config({ path: './.env' });
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();

server.express.use(cookieParser());

// commented out bc it messes up testing queries and mutations in the graphql playground
// server.express.use(async (req, res, next) => {
// 	const { token } = req.cookies;
// 	if (token) {
// 		const { userId } = jwt.verify(token, process.env.APP_SECRET);
// 		req.userId = userId;
// 	}
// 	next();
// });

// kinda self explanatory but by putting a comment here I feel like i've done a better job
server.start(
	{
		cors: {
			credentials: true,
			origin: process.env.FRONTEND_URL
		}
	},
	details => {
		console.log(`Server is now running on port http://localhost:${details.port}`);
	}
);
