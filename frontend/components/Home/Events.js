import React from 'react';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Event from './Event';

import GridContainer from '../../styledComponents/Grid/GridContainer';

export const ALL_EVENTS_QUERY = gql`
	query ALL_EVENTS_QUERY($genre: String! = "music") {
		getEvents(genre: $genre) {
			id
			title
			details {
				url
				description
				start_time
				bio
				tags {
					title
					owner
				}
			}
			location {
				venue
			}
			image_url
		}
	}
`;

const Events = () => {
	return (
		<GridContainer style={{ maxWidth: 'calc(100% - 200px)', marginLeft: '200px' }}>
			<h1 style={{ textAlign: 'center' }}>Upcoming Events Near You</h1>
			<Query query={ALL_EVENTS_QUERY}>
				{({ data, error, loading }) => {
					if (loading) return <p>Loading...</p>;
					if (error) return <p>Error: {error.message}</p>;
					return data.getEvents.map(event => <Event event={event} key={event.id} />);
				}}
			</Query>
		</GridContainer>
	);
};

export default Events;
