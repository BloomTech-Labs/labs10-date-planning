const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

require('dotenv').config({ path: './.env' });
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();

server.express.use(cookieParser());

// commented out bc it messes up testing queries and mutations in the graphql playground
server.express.use((req, res, next) => {
	const { token } = req.cookies;
	if (token) {
		const { userId } = jwt.verify(token, process.env.APP_SECRET);
		req.userId = userId;
	}
	next();
});

// maybe a decent way to setup cors for app since we have multiple URLs
// server.use(function(req, res, next) {
// 	var allowedOrigins = ['up4api.heroku.com', 'http://localhost:3000'];
// 	var origin = req.headers.origin;
// 	if (allowedOrigins.indexOf(origin) > -1) {
// 		res.setHeader('Access-Control-Allow-Origin', origin);
// 	}
// 	//res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8020');
// 	res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
// 	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
// 	res.header('Access-Control-Allow-Credentials', true);
// 	return next();
// });

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
