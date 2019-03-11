import gql from 'graphql-tag';

export const LIKED_BY_QUERY = gql`
	query {
		getLikedByList {
			id
			firstName
			img {
				id
				default
				img_url
			}
		}
	}
`;
