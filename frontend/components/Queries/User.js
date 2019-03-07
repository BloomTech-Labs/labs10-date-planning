import { Query, withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';

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
	// let { data, error } = await client.readQuery({
	// 	query: CURRENT_USER_QUERY,
	// });
	let data = client.cache.extract();
	return Object.values(data).some(val => val.hasOwnProperty('currentUser'));
};

User.propTypes = {
	children: PropTypes.func.isRequired,
};

export default User;

export { CURRENT_USER_QUERY };
