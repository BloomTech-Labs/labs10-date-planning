import { Query } from 'react-apollo';
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
				title
				description
				url
				image_url
				times
				location
			}
		}
	}
`;

const User = props => (
	<Query {...props} query={CURRENT_USER_QUERY}>
		{payload => props.children(payload)}
	</Query>
);

User.propTypes = {
	children: PropTypes.func.isRequired
};

export default User;
export { CURRENT_USER_QUERY };
