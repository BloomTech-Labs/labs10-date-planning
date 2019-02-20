import React, { useState, useEffect, Fragment } from 'react';
import { withApollo, Mutation } from 'react-apollo';
import EventsQuery, { ALL_EVENTS_QUERY } from '../Queries/AllEvents';
import { GEOHASH_QUERY } from '../Queries/GeoHash';
import User, { CURRENT_USER_QUERY } from '../Queries/User';
import _ from 'lodash';
import NProgress from 'nprogress';
import { UPDATE_LOCATION_MUTATION } from '../Mutations/updateLocation';
import Filters from './Filters';
import Event from './Event';
import Primary from '../../styledComponents/Typography/Primary';
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
	const [ location, setLocation ] = useState('New York, NY');
	const [ user, setUser ] = useState(undefined);
	useEffect(() => {
		getUser();
	}, []);

	useEffect(
		() => {
			getEvents({
				location: location,
				alt: 'all',
				page: 1,
				categories: [],
				dates: [],
			});
		},
		[ location ],
	);
	const getUser = async () => {
		let { data, loading } = await client.query({
			query: CURRENT_USER_QUERY,
		});
		if (loading) NProgress.start();
		if (data.currentUser) {
			NProgress.set(0.5);
			setUser(data.currentUser);
			if (data.currentUser.location) await setLocation(data.currentUser.location);
			getEvents({
				location: location,
				alt: 'all',
				page: 1,
				categories: [],
				dates: [],
			});
		}
	};

	const getGeoHash = async city => {
		let { data, loading, error } = await client.query({
			query: GEOHASH_QUERY,
			variables: { city },
		});

		return data.geoHash;
	};
	const getEvents = async variables => {
		let geoData = await getGeoHash(variables.location);
		variables.location = geoData.geoHash;
		let { data, loading } = await client.query({
			query: ALL_EVENTS_QUERY,
			variables: variables,
		});
		if (data.getEvents) NProgress.done();
		console.log(data.getEvents.events);
		let events = _.chunk(data.getEvents.events, 12);
		let newEvents = { ...data.getEvents, events: events };

		setEvents(newEvents);
	};

	const loadMore = page => {
		if (page < events.page_count - 1) {
			getEvents({
				location: location,
				page: page + 1,
			});
		}
	};

	const handleCompleted = async stff => {
		console.log(stff);
		NProgress.done();
		let { data, loading } = await client.query({
			query: CURRENT_USER_QUERY,
		});
		if (data.currentUser) {
			setUser(data.currentUser);
		}
	};

	if (!events) return <div>loading</div>;
	else
		return (
			<div className={classes.section} style={{ paddingTop: '40px' }}>
				<div className={classes.container}>
					<Fragment>
						<GridContainer>
							<GridItem md={3} sm={3}>
								<div>
									<LocationSearch setLocation={setLocation} />
									<p style={{ margin: 0 }}>Showing events near {location}.</p>
									<Mutation
										mutation={UPDATE_LOCATION_MUTATION}
										variables={{ city: location }}
										onCompleted={handleCompleted}
									>
										{(updateLocation, { error, loading, called }) => {
											console.log(user.location, location);

											if (called) NProgress.start();
											return (
												<div
													style={{
														display: 'flex',
														alignItems: 'center',
													}}
												>
													{user && user.location !== location ? (
														<Primary>
															<b
																onClick={updateLocation}
																style={{ cursor: 'pointer' }}
															>
																make default location?
															</b>
														</Primary>
													) : (
														<div style={{ height: '21px' }} />
													)}
												</div>
											);
										}}
									</Mutation>
								</div>
								<Filters location={location} page={page} getEvents={getEvents} />
							</GridItem>

							<GridItem md={9} sm={9}>
								<GridContainer>
									<GridItem sm={6} md={4} lg={4}>
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

									<GridItem sm={6} md={4} lg={4}>
										{events.events[1] &&
											events.events[1].map(event => (
												<Event event={event} key={event.id} />
											))}
									</GridItem>
									<GridItem sm={6} md={4} lg={4}>
										{events.events[2] &&
											events.events[2].map(event => (
												<Event event={event} key={event.id} />
											))}
									</GridItem>
								</GridContainer>
							</GridItem>
						</GridContainer>
					</Fragment>
				</div>
			</div>
		);
};

export default withApollo(withStyles(styles)(Events));
