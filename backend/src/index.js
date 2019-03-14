const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

require("dotenv").config({ path: "./.env" });
const { verifyUserToken } = require("./firebase/firebase");
const createServer = require("./createServer");
const db = require("./db");

const server = createServer();
server.express.use(cookieParser());

server.express.use(async (req, res, next) => {
	const { token, session } = req.cookies;
	if (token) {
		const { userId } = jwt.verify(token, process.env.APP_SECRET);
		req.userId = userId;
		return next();
	}
	// if (session) {
	// 	const firebaseUser = await verifyUserToken(session);
	// 	req.userId = req.cookies.userId;
	// }
	next();
});

server.express.use(async (req, res, next) => {
	if (!req.userId) return next();
	const user = await db.query.user(
		{ where: { id: req.userId } },
		"{ id, email, firstName, lastName, img { img_url}, location, permissions, dob stripeCustomerId, stripeSubscriptionId, events { id }, maxAgePref, minAgePref, genderPrefs age gender blocked { id }}"
	);
	req.user = user;
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
