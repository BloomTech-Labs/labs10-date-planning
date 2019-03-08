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

export async function isLoggedIn(ctx) {
	const { apolloClient } = ctx;
	// console.log(Object.keys(ctx), "ctx key logging in step 2");
	console.log(ctx.asPath, "asPath step3");
	console.log(ctx.pathname, "pathname step4");
	const data = await apolloClient.query({
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
	});
	console.log(data);
	return data;
	// .then(data => {
	// 	console.log(data, "teehee step5");
	// 	return { currentUser: data };
	// })
	// .catch(() => {
	// 	console.error("wooooof");
	// 	return null;
	// });
}
