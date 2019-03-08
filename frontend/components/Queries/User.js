import { Query, withApollo } from "react-apollo";
import gql from "graphql-tag";
import PropTypes from "prop-types";

const CURRENT_USER_QUERY = gql`
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
`;

const User = props => (
	<Query {...props} query={CURRENT_USER_QUERY}>
		{payload => props.children(payload)}
	</Query>
);

export const isLoggedIn = async client => {
	console.log(Object.keys(client), "ctx Index.getInit");
	console.log(client.cache, "isLoggedIn client cache");
	let data = await client.readQuery({
		query: CURRENT_USER_QUERY
	});
	console.log(data, "isLoggedIn queries component");
	// return Object.values(data).some(val => val.hasOwnProperty("currentUser"));
	return {};
};

User.propTypes = {
	children: PropTypes.func.isRequired
};

export default User;

export { CURRENT_USER_QUERY };
