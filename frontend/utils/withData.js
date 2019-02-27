import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { endpoint, prodEndpoint } from '../config';

//const cache = new InMemoryCache({ dataIdFromObject: object => object.key || null });

function createClient({ headers }) {
	return new ApolloClient({
		//uri: endpoint,
		//ssrMode: true,
		uri: process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint,
		request: operation => {
			operation.setContext({
				fetchOptions: {
					credentials: 'include',
				},
				headers,
			});
		},

		//cache,
		// clientState: {
		// 	defaults,
		// 	resolvers,
		// 	typeDefs
		// },
	});
}

// function create(initialState, { getToken }) {
// 	const httpLink = createHttpLink({
// 	  uri: gql_url + "/graphql",
// 	  credentials: "include"
// 	});

//   const authLink = setContext((_, { headers }) => {
// 	  const token = getToken()["XSRF-TOKEN"];
// 	  return {
// 		headers: {
// 		  ...headers,
// 		  "X-XSRF-TOKEN": token
// 		}
// 	  };
// 	});

//   return new ApolloClient({
// 	  connectToDevTools: process.browser,
// 	  ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
// 	  link: authLink.concat(httpLink),
// 	  cache: new InMemoryCache().restore(initialState || {})
// 	});
//   }

export default withApollo(createClient);
