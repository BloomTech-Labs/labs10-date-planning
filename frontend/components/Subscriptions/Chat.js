import gql from 'graphql-tag';

export const MY_CHAT_SUBSCRIPTION = gql`
	subscription($id: String!) {
		myChat(id: $id) {
			mutation
			node {
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
						id
					}
					updatedAt
				}
			}
		}
	}
`;

export const MY_MESSAGE_SUBSCRIPTION = gql`
	subscription($id: String!) {
		myMessages(id: $id) {
			mutation
			node {
				chat {
					id
				}
				id
				text
				seen
				from {
					id
				}
				updatedAt
			}
		}
	}
`;
