const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

require("dotenv").config({ path: "./.env" });
const { verifyUserToken } = require("./firebase/firebase");
const createServer = require("./createServer");
const db = require("./db");

const server = createServer();

server.express.use(cookieParser());
server.express.use(bodyParser.json());

server.express.use(async (req, res, next) => {
	const { token } = req.cookies;
	const { auth } = req.headers;
	// console.log(auth, `auth here`);
	// console.log(token, `token here`);
	// console.log(req.headers, "request headers");
	// console.log(req.cookies, "request cookies");

	if (token) {
		const { userId } = jwt.verify(token, process.env.APP_SECRET);
		req.userId = userId;
	}

	if (auth && !token) {
		// console.log(auth);
		const { userId } = jwt.verify(auth, process.env.APP_SECRET);
		req.userId = userId;
	}
	// console.log("auth confirmed");
	// console.log(Object.keys(auth), "auth object garbage");

	// const id = req.cookies.userId;
	// if (id) {
	// 	const firebaseUser = await verifyUserToken(session);
	// 	req.userId = id;
	// }
	next();
});

server.express.use(async (req, res, next) => {
	if (!req.userId) return next();
	const user = await db.query.user(
		{ where: { id: req.userId } },
		"{ id, email, firstName, lastName, img { img_url}, location, permissions, stripeCustomerId, stripeSubscriptionId, events { id }, maxAgePref, minAgePref, genderPrefs age gender blocked { id }}"
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
