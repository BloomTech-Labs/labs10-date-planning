import React, { useState, useEffect, Fragment } from 'react';
import { withApollo, Mutation } from 'react-apollo';
import EventsQuery, { ALL_EVENTS_QUERY } from '../Queries/AllEvents';
import User from '../Queries/User';
import _ from 'lodash';
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
			page: 1,
			categories: [],
			dates: [],
		});
	}, []);
	const getEvents = async variables => {
		let { data, loading } = await client.query({
			query: ALL_EVENTS_QUERY,
			variables: variables,
		});

		let events = _.chunk(data.getEvents.events, 8);
		let newEvents = { ...data.getEvents, events: events };

		setEvents(newEvents);
	};

	const loadMore = page => {
		if (page < events.page_count - 1) {
			getEvents({
				location: events.location,
				page: page + 1,
			});
		}
	};

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
												<InfiniteScroll
													pageStart={0}
													loadMore={loadMore}
													hasMore={page < events.page_count}
													threshold={400}
													loader={
														<div className='loader' key={0}>
															Loading ...
														</div>
													}
												>
													{events.events[0].map(event => (
														<Event event={event} key={event.id} />
													))}
												</InfiniteScroll>
											</GridItem>

											<GridItem sm={6} md={4} lg={3}>
												{events.events[1] &&
													events.events[1].map(event => (
														<Event event={event} key={event.id} />
													))}
											</GridItem>
											<GridItem sm={6} md={4} lg={3}>
												{events.events[2] &&
													events.events[2].map(event => (
														<Event event={event} key={event.id} />
													))}
											</GridItem>
											<GridItem sm={6} md={4} lg={3}>
												{events.events[3] &&
													events.events[3].map(event => (
														<Event event={event} key={event.id} />
													))}
											</GridItem>
										</GridContainer>
									</GridItem>
								</GridContainer>
							</Fragment>
						</div>
					</div>
				)}
			</User>
		);
};

export default withApollo(withStyles(styles)(Events));
