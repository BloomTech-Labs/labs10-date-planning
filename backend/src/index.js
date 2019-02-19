const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

require('dotenv').config({ path: './.env' });
const { verifyUserToken } = require('./firebase/firebase');
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();
server.express.use(cookieParser());

server.express.use(async (req, res, next) => {
	const { token, session } = req.cookies;
	if (token) {
		const { userId } = jwt.verify(token, process.env.APP_SECRET);
		req.userId = userId;
	}
	if (session) {
		const firebaseUser = await verifyUserToken(session);
		req.userId = req.cookies.userId;
	}
	next();
});

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
