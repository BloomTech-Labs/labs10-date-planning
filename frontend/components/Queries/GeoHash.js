import gql from 'graphql-tag';

export const GEOHASH_QUERY = gql`
	query GEOHASH_QUERY($city: String!) {
		geoHash(city: $city) {
			geoHash
		}
	}
`;
