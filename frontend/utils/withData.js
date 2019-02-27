import withApollo from 'next-with-apollo';
import { ApolloClient, InMemoryCache } from 'apollo-boost';
import { endpoint, prodEndpoint } from '../config';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
let apolloClient = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
	global.fetch = fetch;
}

const httpLink = createHttpLink({
	uri: process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint,
	credentials: 'include',
});

const authLink = setContext((_, { headers }) => {
	return {
		headers,
	};
});

function createClient(initialState) {
	console.log('inititalstate', initialState);
	return new ApolloClient({
		//uri: endpoint,
		ssrMode: !process.browser,

		// request: operation => {
		// 	operation.setContext({
		// 		fetchOptions: {
		// 			credentials: 'include',
		// 		},
		// 		//headers,
		// 	});
		// },
		link: authLink.concat(httpLink),

		cache: new InMemoryCache({ dataIdFromObject: object => object.key || null }).restore(
			initialState || {},
		),
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

export default function initApollo(initialState) {
	// Make sure to create a new client for every server-side request so that data
	// isn't shared between connections (which would be bad)
	if (!process.browser) {
		return createClient(initialState);
	}

	// Reuse client on the client-side
	if (!apolloClient) {
		apolloClient = createClient(initialState);
	}

	return apolloClient;
}
