import gql from 'graphql-tag';

export const UPDATE_LOCATION_MUTATION = gql`
	mutation UPDATE_LOCATION_MUTATION($city: String!) {
		updateLocation(city: $city) {
			id
			location
		}
	}
`;
