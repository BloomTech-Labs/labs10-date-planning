import React from 'react';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

export const ADD_EVENT_MUTATION = gql`
	mutation ADD_EVENT_MUTATION($eventId: String!) {
		addEvent(eventId: $eventId) {
			message
		}
	}
`;
