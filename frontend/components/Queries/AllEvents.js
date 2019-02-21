import React, { useState, useEffect } from 'react';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

export const ALL_EVENTS_QUERY = gql`
	query ALL_EVENTS_QUERY(
		$location: String!
		$page: Int
		$categories: [String]
		$dates: [String]
		$genres: [String]
	) {
		getEvents(
			location: $location
			page: $page
			categories: $categories
			dates: $dates
			genres: $genres
		) {
			page_count
			total_items
			page_number
			location
			events {
				id
				title
				url
				image_url
				large_url
				description
				times
				genre
				notes
				price {
					min
					max
					currency
				}
				location {
					venue
					city
					address
					lat
					long
				}
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
