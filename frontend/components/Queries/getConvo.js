import gql from 'graphql-tag';

export const GET_CONVERSATION_QUERY = gql`
	query GET_CONVERSATION_QUERY($id: String!) {
		getConversation(id: $id) {
			id
			users {
				id
				firstName
				img {
					id
					default
					img_url
				}
			}
			messages {
				id
				text
				seen
				updatedAt
				from {
					id
					firstName
					img {
						id
						default
						img_url
					}
				}
				createdAt
			}
		}
	}
`;
