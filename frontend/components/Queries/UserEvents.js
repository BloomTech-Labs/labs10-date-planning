import gql from 'graphql-tag';

export const USER_EVENTS_QUERY = gql`
	query {
		userEvents {
			id
			title
			image_url
			times
			venue
			attending {
				id
				dob
				firstName
				img {
					id
					default
					img_url
				}
				biography
			}
		}
	}
`;
