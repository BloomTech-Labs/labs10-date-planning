const { Prisma } = require('prisma-binding');

// setup db configuration, but leaving off secret for now bc I want the endpoint to be open
const db = new Prisma({
	typeDefs: 'src/generated/prisma.graphql',
	endpoint: process.env.PRISMA_ENDPOINT,
	// secret: process.env.PRISMA_SECRET,
	debug: false // not entirely certain what this does but found many people doing it online and they're smart
});

module.exports = db;
