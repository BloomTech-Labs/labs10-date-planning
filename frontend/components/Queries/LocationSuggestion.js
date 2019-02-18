import gql from 'graphql-tag';

export const LOCATION_SUGGESTION_QUERY = gql`
	query LOCATION_SUGGESTION_QUERY($city: String!) {
		locationSearch(city: $city) {
			city
		}
	}
`;
