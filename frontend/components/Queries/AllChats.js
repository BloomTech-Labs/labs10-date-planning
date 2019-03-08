import gql from 'graphql-tag';

export const ALL_CHATS_QUERY = gql`
	query {
		getUserChats {
			id
			users {
				id
				firstName
				img {
					id
					default
					img_url
				}
				dob
				gender
			}
			messages {
				id
				text
				createdAt
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
					dob
					gender
				}
				chat {
					id
				}
			}
		}
	}
`;
