import gql from 'graphql-tag';

export const GET_CONVERSATION_QUERY = gql`
	query GET_CONVERSATION_QUERY($id: String!) {
		getConversation(id: $id) {
			id
			users {
				id
				firstName
			}
			messages {
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
			}
		}
	}
`;
