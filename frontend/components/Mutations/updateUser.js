import gql from 'graphql-tag';

export const UPDATE_USER_MUTATION = gql`
	mutation UPDATE_USER_MUTATION($location: String, $dob: String, $gender: Gender) {
		updateUser(data: { location: $location, dob: $dob, gender: $gender }) {
			id
			location
			dob
			gender
		}
	}
`;
