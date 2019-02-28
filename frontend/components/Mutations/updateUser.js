import gql from 'graphql-tag';

export const UPDATE_USER_MUTATION = gql`
	mutation UPDATE_USER_MUTATION(
		$location: String
		$dob: String
		$gender: Gender
		$genderPrefs: [Gender!]
		$minAgePref: Int
		$maxAgePref: Int
		$biography: String
	) {
		updateUser(
			data: {
				location: $location
				dob: $dob
				biography: $biography
				gender: $gender
				genderPrefs: { set: $genderPrefs }
				minAgePref: $minAgePref
				maxAgePref: $maxAgePref
			}
		) {
			id
			location
			biography
			dob
			gender
			genderPrefs
			minAgePref
			maxAgePref
		}
	}
`;
