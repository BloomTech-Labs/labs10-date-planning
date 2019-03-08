import { ApolloClient, InMemoryCache } from "apollo-boost";
import withApollo from "next-with-apollo";
// import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloLink, Observable, split } from "apollo-link";
import { HttpLink, createHttpLink } from "apollo-link-http";
// import { InMemoryCache } from "apollo-cache-inmemory";
// import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
// import { ApolloClient } from "apollo-client";
import { onError } from "apollo-link-error";
import fetch from "isomorphic-unfetch";

import { endpoint, prodEndpoint } from "../config";

// let apolloClient = null;

// if (!process.browser) {
// 	global.fetch = fetch;
// }

export default withApollo(({ ctx, headers, initialState }) => {
	const httpLink = createHttpLink({
		uri: process.env.NODE_ENV === "development" ? endpoint : prodEndpoint,
		headers: {
			...headers,
			auth: token ? `${token}` : ""
		},
		credentials: "include",
		fetchOptions: {
			credentials: "include"
		}
	});

	// const authLink = setContext((_, { headers }) => {
	// 	const token = getToken();
	// 	return {
	// 		fetchOptions: {
	// 			credentials: "include"
	// 		},
	// 		headers: {
	// 			...headers,
	// 			auth: token ? `${token}` : ""
	// 		}
	// 	};
	// });
	return new ApolloClient({
		link: ApolloLink.from([
			onError(({ graphQLErrors, networkError }) => {
				if (graphQLErrors) {
					console.error({ graphQLErrors });
				}
				if (networkError) {
					console.error({ networkError });
				}
			}),
			authLink,
			httpLink
		]),
		credentials: "include",
		headers: ctx ? { ...headers, ...ctx.req.headers } : headers,
		fetchOptions: {
			credentials: "include"
		},
		ssrMode: !process.browser,
		cache: new InMemoryCache().restore(initialState || {})
		// link: authLink.concat(httpLink), // Disables forceFetch on the server (so queries are only run once)
		// request: operation => {
		// 	operation.setContext({
		// 		fetchOptions: {
		// 			credentials: "include"
		// 		},
		// 		headers
		// 	});
		// },
	});
});

// export default function initApollo(initialState, options) {
// 	if (!process.browser) {
// 		return create(initialState, options);
// 	}

// 	if (!apolloClient) {
// 		apolloClient = create(initialState, options);
// 	}

// 	return apolloClient;
// }
