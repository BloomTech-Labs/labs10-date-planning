import React, { useState, useEffect } from 'react';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

export const ALL_EVENTS_QUERY = gql`
	query ALL_EVENTS_QUERY(
		$location: String!
		$page: Int
		$categories: [String]
		$dates: [String]
	) {
		getEvents(location: $location, page: $page, categories: $categories, dates: $dates) {
			page_count
			total_items
			page_number
			events {
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
	}
`;

const Events = ({ children, variables }) => {
	return (
		<Query query={ALL_EVENTS_QUERY} variables={variables}>
			{payload => children(payload)}
		</Query>
	);
};

export default Events;
