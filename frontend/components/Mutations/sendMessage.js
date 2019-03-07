import gql from 'graphql-tag';

export const SEND_MESSAGE_MUTATION = gql`
	mutation SEND_MESSAGE_MUTATION($id: String!, $message: String!) {
		sendMessage(id: $id, message: $message) {
			id
			text
			from {
				id
				firstName
				img {
					default
					img_url
				}
			}
			createdAt
			seen
		}
	}
`;
