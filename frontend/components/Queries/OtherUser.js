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
			events {
				id
			}
			interests {
				id
			}
		}
	}
`;

export const SHARED_EVENTS_QUERY = gql`
	query SHARED_EVENTS_QUERY($id: String!) {
		getSharedEvents(userToMatchId: $id) {
			id
			title
			image_url
		}
	}
`;
