import gql from 'graphql-tag';

export const CREATE_CHAT_MUTATION = gql`
	mutation CREATE_CHAT_MUTATION($id: String!, $message: String!) {
		createChat(id: $id, message: $message) {
			id
			users {
				id
				firstName
			}
			messages {
				id
				text
				seen
				from {
					firstName
					img {
						default
						img_url
					}
				}
				createdAt
			}
		}
	}
`;
