// import React, { useState, useEffect } from 'react';
// import { Query } from 'react-apollo';
import gql from 'graphql-tag';

export const EVENT_QUERY = gql`
	query EVENT_QUERY($id: String!) {
		getEvent(id: $id) {
			id
			title
			url
			description
			times
			location {
				venue
				city
				address
			}
			image_url
		}
	}
`;
