import gql from 'graphql-tag';

export const ALL_CHATS_QUERY = gql`
	query {
		getUserChats {
			messages {
				id
				text
				createdAt
				seen
				from {
					id
					firstName
					imageThumbnail
					dob
					gender
				}
			}
		}
	}
`;
