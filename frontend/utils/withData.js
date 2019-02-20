import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';
import { endpoint, prodEndpoint } from '../config';

function createClient({ headers }) {
	return new ApolloClient({
		uri: process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint,
		request: operation => {
			operation.setContext({
				fetchOptions: {
					credentials: 'include',
				},
				headers,
			});
		},
	});
}

// function create(initialState, { getToken, cookies, csrfToken }) {
// 	const httpLink = createHttpLink({
// 	  uri: "http://localhost:3000/graphql",
// 	  credentials: "include"
// 	});
  
// 	  const authLink = setContext((_, { headers }) => {
// 	  const token = getToken();
// 	  return {
// 		headers: {
// 		  ...headers,
// 		  authorization: token ? 'Bearer ${token}' : "",
// 		  Cookie: cookies ? cookies : "",
// 		  "x-xsrf-token": csrfToken ? csrfToken : ""
// 		}
// 	  };
// 	});

export default withApollo(createClient);
