const { Prisma } = require('prisma-binding');

// setup db configuration
const db = new Prisma({
	typeDefs: 'src/generated/prisma.graphql',
	endpoint: process.env.PRISMA_ENDPOINT,
	secret: process.env.PRISMA_SECRET,
	debug: false // limits amount of nonsense graphql prints to console
});

module.exports = db;
