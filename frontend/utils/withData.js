import { InMemoryCache } from "apollo-cache-inmemory";
import { getMainDefinition } from "apollo-utilities";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { ApolloLink, split } from "apollo-link";
import { WebSocketLink } from "apollo-link-ws";
import { onError } from "apollo-link-error";
import withApollo from "next-with-apollo";
import ApolloClient from "apollo-client";
import { endpoint, prodEndpoint, wsEndpoint, wsProdEndpoint } from "../config";

export default withApollo(({ headers = {} }) => {
	const ssrMode = !process.browser;

	const httpLink = createHttpLink({
		uri: process.env.NODE_ENV === "development" ? endpoint : prodEndpoint
	});

	const wsLink =
		!ssrMode &&
		new WebSocketLink({
			uri: process.env.NODE_ENV === "development" ? wsEndpoint : wsProdEndpoint,
			options: {
				reconnect: true
				// maybe we can add a header in here to get some sort of auth working
				// connectionParams: {d
				//   authorization: headers.authorization
				// }
			}
		});

	const contextLink = setContext(async () => ({
		fetchOptions: {
			credentials: "include"
		},
		headers
	}));

	const errorLink = onError(({ graphQLErrors, networkError }) => {
		if (graphQLErrors) {
			graphQLErrors.map(err => console.log(`[GraphQL error]: Message: ${err.message}`));
		}
		if (networkError) console.log(`[Network error]: ${networkError}`);
	});


	// const authLink = setContext((_, { headers }) => {
	// 	const token = getToken()["XSRF-TOKEN"];
	// 	return {
	// 		headers: {
	// 			...headers,
	// 			"X-XSRF-TOKEN": token
	// 		}
	// 	};
	// });

	let link = ApolloLink.from([errorLink, contextLink, httpLink]);


	if (!ssrMode) {
		link = split(
			// split based on operation type
			({ query }) => {
				const definition = getMainDefinition(query);
				return definition.kind === "OperationDefinition" && definition.operation === "subscription";
			},
			wsLink,
			link
		);
	}

	const cache = new InMemoryCache({
		// dataIdFromObject: ({ id, __typename }) => (id && __typename ? __typename + id : null)
	});

	return new ApolloClient({
		link,
		ssrMode,
		cache
	});
});
