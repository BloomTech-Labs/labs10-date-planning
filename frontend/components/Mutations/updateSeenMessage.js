import gql from 'graphql-tag';

export const UDPATE_SEEN_MSG_MUTATION = gql`
	mutation UDPATE_SEEN_MSG_MUTATION($chatId: String!) {
		updateSeenMessage(chatId: $chatId) {
			id
			users {
				id
				firstName
			}
			messages {
				id
				seen
				updatedAt
			}
		}
	}
`;
