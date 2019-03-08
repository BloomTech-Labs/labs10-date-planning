import { ApolloClient, InMemoryCache } from "apollo-boost";
// import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink, Observable, split } from "apollo-link";
import { HttpLink, createHttpLink } from "apollo-link-http";
// import { InMemoryCache } from "apollo-cache-inmemory";
// import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
// import { ApolloClient } from "apollo-client";
import { onError } from "apollo-link-error";
import fetch from "isomorphic-unfetch";

import { endpoint, prodEndpoint } from "../config";

let apolloClient = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
	global.fetch = fetch;
}

function create(initialState, { getToken }) {
	const httpLink = createHttpLink({
		uri: process.env.NODE_ENV === "development" ? endpoint : prodEndpoint,
		credentials: "include",
		fetchOptions: {
			credentials: "include"
		}
	});

	const authLink = setContext((_, { headers }) => {
		const token = getToken();
		// console.log(token, "token in setContext initApollo");
		return {
			headers: {
				...headers,
				auth: token ? `${token}` : ""
			}
		};
	});
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
		ssrMode: true,
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
}

export default function initApollo(initialState, options) {
	// Make sure to create a new client for every server-side request so that data
	// isn't shared between connections (which would be bad)
	if (!process.browser) {
		return create(initialState, options);
	}

	// Reuse client on the client-side
	if (!apolloClient) {
		apolloClient = create(initialState, options);
	}

	return apolloClient;
}
