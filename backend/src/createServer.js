const { GraphQLServer } = require('graphql-yoga');
const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');
const db = require('./db');

function createServer() {
	return new GraphQLServer({
		typeDefs: 'src/schema.graphql', // gotta have these to graphql
		resolvers: {
			// also good to have these lil guys too
			Mutation,
			Query
		},
		resolverValidationOptions: {
			requireResolversForResolveType: false // this is an option i added because the internet. hope you dont mind
		},
		context: req => ({ ...req, db }) //context is important kids
	});
}

module.exports = createServer;
