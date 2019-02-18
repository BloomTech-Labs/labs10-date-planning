import React, { useState, useEffect, Fragment } from 'react';
import { withApollo, Mutation } from 'react-apollo';
import EventsQuery, { ALL_EVENTS_QUERY } from '../Queries/AllEvents';
import User from '../Queries/User';
import { UPDATE_LOCATION_MUTATION } from '../Mutations/updateLocation';
import Filters from './Filters';
import Event from './Event';
import InfiniteScroll from 'react-infinite-scroller';
import Button from '../../styledComponents/CustomButtons/Button';
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

		setEvents(data.getEvents);
	};
	// return (
	// 	<Location>
	// 		{({ data, loading, error }) => {
	// 			let { getLocation } = data;
	// 			if (loading) return <div>getting location</div>;
	if (!events) return <div>loading</div>;
	else
		return (
			<User>
				{data => (
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
									<Mutation
										mutation={UPDATE_LOCATION_MUTATION}
										variables={{ city: events.location }}
									>
										{(updateLocation, { error, loading, called }) => {
											return (
												<div
													style={{
														display: 'flex',
														alignItems: 'center',
													}}
												>
													<p style={{ margin: 0 }}>
														Showing events near {events.location}.
													</p>
													{data.currentUser &&
													data.currentUser.location !==
														events.location && (
														<Button
															color='primary'
															simple
															size='sm'
															style={{ padding: '12px 7px' }}
															onClick={updateLocation}
														>
															make default location?
														</Button>
													)}
												</div>
											);
										}}
									</Mutation>
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
											<GridItem sm={6} md={4} lg={3}>
												{events.events
													.slice(0, 3)
													.map(event => (
														<Event event={event} key={event.id} />
													))}
											</GridItem>
											<GridItem sm={6} md={4} lg={3}>
												{events.events
													.slice(4, 7)
													.map(event => (
														<Event event={event} key={event.id} />
													))}
											</GridItem>
											<GridItem sm={6} md={4} lg={3}>
												{events.events
													.slice(8, 11)
													.map(event => (
														<Event event={event} key={event.id} />
													))}
											</GridItem>
											<GridItem sm={6} md={4} lg={3}>
												{events.events
													.slice(12, 15)
													.map(event => (
														<Event event={event} key={event.id} />
													))}
											</GridItem>
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
				)}
			</User>
		);

	// );
};

export default withApollo(withStyles(styles)(Events));
