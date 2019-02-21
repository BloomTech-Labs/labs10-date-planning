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
			location
			imageThumbnail
			imageLarge
			createdAt
			permissions
			events {
				id
				eventfulID
				title
				description
				url
				image_url
				large_url
				times
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
	let { data } = await client.query({
		query: CURRENT_USER_QUERY,
	});
	return data;
};

User.propTypes = {
	children: PropTypes.func.isRequired,
};

export default User;

export { CURRENT_USER_QUERY };
