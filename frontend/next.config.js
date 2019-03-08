const withSass = require('@zeit/next-sass');
const withImages = require('next-images');
const isProd = process.env.NODE_ENV === 'production';

module.exports = withSass(
	withImages({
		// serverRuntimeConfig: {},
		// publicRuntimeConfig: {
		// 	appContext: '/',
		// },
		target: 'serverless',
	}),
);
