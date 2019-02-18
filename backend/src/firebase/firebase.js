const firebaseAdmin = require('firebase-admin');

const admin = firebaseAdmin.initializeApp(
	{
		credential: firebaseAdmin.credential.cert({
			type: 'service_account',
			project_id: process.env.FIREBASE_PROJECT_ID,
			private_key_id: process.PRIVATE_KEY_ID,
			private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
			client_email: process.env.FIREBASE_CLIENT_EMAIL,
			client_id: process.env.FIREBASE_CLIENT_ID
		}),
		databaseURL: process.env.FIREBASE_DATABASE_URL
	},
	'server'
);

const createUserToken = async (args, ctx) => {
	const idToken = args.idToken.toString();
	// const csrfToken = args.csrfToken.toString(); // what is the csrf token for?
	// if (csrfToken !== ctx.request.cookies.csrfToken) {
	// 	return { error: 'Unauthorised request', token: null };
	// }
	const decodedIdToken = await admin.auth().verifyIdToken(idToken);
	const expiresIn = 60 * 60 * 24 * 5 * 1000;

	if (!(new Date().getTime() / 1000 - decodedIdToken.auth_time < 5 * 60))
		return { error: { message: 'Recent sign in required!' }, token: null };

	const sessionCookie = await admin.auth().createSessionCookie(idToken, { expiresIn });
	ctx.response.cookie('session', sessionCookie, {
		maxAge: 60 * 60 * 24 * 5 * 1000,
		httpOnly: true
	});
	return sessionCookie
		? sessionCookie
		: { error: 'User Session Token Creation Error', token: null };
};

const verifyUserToken = async token => {
	const claims = await admin
		.auth()
		.verifySessionCookie(token, true)
		.catch(error => {
			return {
				error: {
					message: 'User Session Token Verification Error',
					stack: error
				},
				claims: null
			};
		});

	if (claims) return claims;
	//{ error: false, claims };
	else
		return {
			error: { message: 'User Session Token Verification Error' },
			claims: null
		};
};

const setUserClaims = (uid, data) => admin.auth().setCustomUserClaims(uid, data);
const getUserRecord = uid => admin.auth().getUser(uid);
const verifyIdToken = idToken => admin.auth().verifyIdToken(idToken);
const getUID = async idToken => {
	const decodedToken = await admin.auth().verifyIdToken(idToken);
	return decodedToken.uid;
};

module.exports = {
	admin,
	createUserToken,
	verifyUserToken,
	setUserClaims,
	verifyIdToken,
	getUserRecord,
	getUID
};
