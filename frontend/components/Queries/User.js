import { Query, withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';

const CURRENT_USER_QUERY = gql`
	query {
		currentUser {
			id
			firstName
			lastName
			email
			biography
			dob
			location
			gender
			genderPrefs
			minAgePref
			maxAgePref
			verified
			img {
				default
				img_url
				id
			}
			permissions
			liked {
				id
			}
			blocked {
				id
			}
			events {
				id
			}
			chats {
				users {
					id
				}
			}
			interests {
				id
				category
				name
				tmID
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
	try {
		let response = await client.query({
			query: CURRENT_USER_QUERY,
			operationName: 'hellayyy',
		});
		if (response) {
			return { currentUser: response.data };
		}
	} catch (e) {
		console.log(e);
		return {};
	}
};

User.propTypes = {
	children: PropTypes.func.isRequired,
};

export default User;

export { CURRENT_USER_QUERY };
