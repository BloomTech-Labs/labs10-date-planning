import gql from 'graphql-tag';

export const USER_QUERY = gql`
	query USER_QUERY($id: ID) {
		user(where: { id: $id }) {
			id
			firstName
			dob
			img {
				id
				default
				img_url
			}
			biography
		}
	}
`;
