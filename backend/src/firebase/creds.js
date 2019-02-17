module.exports = {
	type: 'service_account',
	project_id: process.env.GCP_PROJECT_ID,
	private_key_id: 'e804fcdaceb6fab5ef251752182cc26f8870369e',
	private_key: process.env.FIREBASE_PRIVATE_KEY,
	client_email: process.env.FIREBASE_CLIENT_EMAIL,
	client_id: process.env.FIREBASE_CLIENT_ID,
	auth_uri: 'https://accounts.google.com/o/oauth2/auth',
	token_uri: 'https://oauth2.googleapis.com/token',
	auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
	client_x509_cert_url:
		'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-nnczc%40up4-life.iam.gserviceaccount.com'
};
