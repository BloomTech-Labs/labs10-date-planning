import gql from 'graphql-tag';

export const ALL_GENRE_QUERY = gql`
	query {
		genres {
			id
			tmID
			category
			name
		}
	}
`;
