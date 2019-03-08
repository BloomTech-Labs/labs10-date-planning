// export const isLoggedIn = async client => {
// 	let { data } = await client.query({
// 		query: CURRENT_USER_QUERY
// 	});
// 	return data;
// };
import gql from "graphql-tag";

export function isAuthPath(path) {
	// Other routes can be added like /forgot-password, etc
	return path === "/login" || path === "/signup";
}

export function isLoggedIn(apolloClient) {
	apolloClient
		.query({
			query: gql`
				query {
					currentUser {
						id
						firstName
						lastName
						gender
						email
						biography
						dob
						location
						imageThumbnail
						genderPrefs
						minAgePref
						maxAgePref
						img {
							default
							img_url
							id
						}
						createdAt
						permissions
						liked {
							id
						}
						blocked {
							id
						}
						events {
							id
							title
							description
							url
							image_url
							times
							venue
							city
							address
						}
						chats {
							users {
								id
							}
						}
						stripeCustomerId
					}
				}
			`
		})
		.then(data => {
			console.log(data);
			return { currentUser: data };
		})
		.catch(() => {
			// Fail gracefully
			return null;
		});
}
