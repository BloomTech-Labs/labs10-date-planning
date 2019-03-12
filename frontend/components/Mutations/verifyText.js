import gql from 'graphql-tag';

export const SEND_VERIFICATION_MUTATION = gql`
	mutation SEND_VERIFICATION_MUTATION($phone: String!) {
		verifyPhone(phone: $phone) {
			message
		}
	}
`;

export const CHECK_VERIFICATION_MUTATION = gql`
	mutation CHECK_VERIFICATION_MUTATION($phone: String!, $code: String!) {
		checkVerify(phone: $phone, code: $code) {
			message
		}
	}
`;
