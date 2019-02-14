import React from 'react';
import { Query } from 'react-apollo';

import gql from 'graphql-tag';
import GridItem from '../../styles/components/Grid/GridItem';
import Card from '../../styles/components/Card/Card';
import CardHeader from '../../styles/components/Card/CardHeader';
import Event from './Event';
import withStyles from '@material-ui/core/styles/withStyles';
import CardStyles from '../../styles/components/Card/sectioncard';
import GridContainer from '../../styles/components/Grid/GridContainer';

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

const Events = ({ classes }) => {
	return (
		<GridContainer style={{ maxWidth: 'calc(100% - 200px)', marginLeft: '200px' }}>
			<Query query={ALL_EVENTS_QUERY}>
				{({ data, error, loading }) => {
					if (loading) return <p>Loading...</p>;
					if (error) return <p>Error: {error.message}</p>;
					return data.getEvents.map(event => (
						<Event event={event} classes={classes} key={event.id} />
					));
				}}
			</Query>
		</GridContainer>
	);
};

export default withStyles(CardStyles)(Events);
