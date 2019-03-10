import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { ApolloLink, split } from "apollo-link";
import { onError } from "apollo-link-error";
import withApollo from "next-with-apollo";
import ApolloClient from "apollo-client";
import { endpoint, prodEndpoint } from "../config";

export default withApollo(({ headers = {} }) => {
	const ssrMode = !process.browser;

	const httpLink = createHttpLink({
		uri: process.env.NODE_ENV === "development" ? endpoint : prodEndpoint
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

	let link = ApolloLink.from([errorLink, contextLink, httpLink]);

	const cache = new InMemoryCache({
		dataIdFromObject: ({ id, __typename }) => (id && __typename ? __typename + id : null)
	});

	return new ApolloClient({
		link,
		ssrMode,
		cache
	});
});
