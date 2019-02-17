import React, { useState, useEffect, Fragment } from 'react';
import { withApollo } from 'react-apollo';
import EventsQuery, { ALL_EVENTS_QUERY } from '../Queries/AllEvents';
import Filters from './Filters';
import Event from './Event';
import LocationSearch from './LocationSearch';
import Location from '../Queries/Location';
import GridContainer from '../../styledComponents/Grid/GridContainer';
import GridItem from '../../styledComponents/Grid/GridItem';
import Paginations from '../../styledComponents/Pagination/Pagination';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from '../../static/jss/material-kit-pro-react/views/ecommerceSections/productsStyle.jsx';

const Events = ({ classes, client }) => {
	const [ page, setPage ] = useState(1);
	const [ events, setEvents ] = useState(undefined);

	useEffect(() => {
		getEvents({
			location: 'New York, NY',
			alt: 'all',
			page: page,
			categories: [],
			dates: [],
		});
	}, []);
	const getEvents = async variables => {
		let { data, loading } = await client.query({
			query: ALL_EVENTS_QUERY,
			variables: variables,
		});
		console.log(data, loading);
		setEvents(data.getEvents);
	};
	return (
		<Location>
			{({ data, loading, error }) => {
				let { getLocation } = data;
				console.log(data);
				if (loading) return <div>getting location</div>;
				else if (!events) return <div>loading</div>;
				else
					return (
						<div className={classes.section} style={{ paddingTop: '40px' }}>
							<div className={classes.container}>
								<h2 style={{ textAlign: 'center' }}>Upcoming Events Near You</h2>

								<Fragment>
									<div
										style={{
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'space-between',
										}}
									>
										<p>Showing events near {events.location}.</p>

										<LocationSearch getEvents={getEvents} />
									</div>
									<GridContainer>
										<Filters
											location={events.location}
											page={page}
											getEvents={getEvents}
										/>

										<GridItem md={9} sm={9}>
											<GridContainer>
												{events.events.map(event => (
													<Event event={event} key={event.id} />
												))}
											</GridContainer>
										</GridItem>

										<Paginations
											pages={[
												{ text: 'PREV' },

												{
													text:
														events.page_number > 2 &&
														events.page_number - 2,
													onClick: () => setPage(events.page_number - 2),
												},
												{
													text:
														events.page_number > 1 &&
														events.page_number - 1,
													onClick: () => setPage(events.page_number - 1),
												},
												{
													active: true,
													text: events.page_number,
												},
												{
													text: events.page_number + 1,
													onClick: () => setPage(events.page_number + 1),
												},
												{
													text: events.page_number + 2,
													onClick: () => setPage(events.page_number + 2),
												},
												{ text: '...' },
												{
													text: events.page_count,
												},

												{ text: 'NEXT' },
											]}
										/>
									</GridContainer>
								</Fragment>
							</div>
						</div>
					);
			}}
		</Location>
	);
};

export default withApollo(withStyles(styles)(Events));
