import gql from 'graphql-tag';

export const ALL_CHATS_QUERY = gql`
	query ALL_CHATS_QUERY {
		id
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
`;
