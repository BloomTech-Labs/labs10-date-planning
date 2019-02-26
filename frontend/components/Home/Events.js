import React, { useState, useEffect, Fragment } from 'react';
import { withApollo, Mutation } from 'react-apollo';
import _ from 'lodash';
import NProgress from 'nprogress';
import InfiniteScroll from 'react-infinite-scroller';
import classNames from 'classnames';
//MUI
import withStyles from '@material-ui/core/styles/withStyles';
import { Drawer, Divider, IconButton } from '@material-ui/core';
import { Menu, ChevronLeft, ChevronRight } from '@material-ui/icons';
//Q&M
import { ALL_EVENTS_QUERY } from '../Queries/AllEvents';
import { CURRENT_USER_QUERY } from '../Queries/User';
import { UPDATE_LOCATION_MUTATION } from '../Mutations/updateLocation';
import Location from '../Queries/Location';
//components
import Filters from './Filters';
import Event from './Event';
import LocationSearch from './LocationSearch';
import NewUser from './NewUser';
import Primary from '../../styledComponents/Typography/Primary';
//styled components
import Button from '../../styledComponents/CustomButtons/Button';
import GridContainer from '../../styledComponents/Grid/GridContainer';
import GridItem from '../../styledComponents/Grid/GridItem';
import Paginations from '../../styledComponents/Pagination/Pagination';
//styles
import styles from '../../static/jss/material-kit-pro-react/views/ecommerceSections/productsStyle.jsx';
import { auth } from '../../utils/firebase';

const Events = ({ classes, client, theme, newUser }) => {
	const [ page, setPage ] = useState(0);
	const [ drawerOpen, setDrawerOpen ] = useState(false);
	const [ events, setEvents ] = useState({ events: [] });
	const [ location, setLocation ] = useState(undefined);

	const [ user, setUser ] = useState(undefined);
	useEffect(() => {
		getUser();
	}, []);

	useEffect(
		() => {
			if (location) {
				getEvents({
					location: location,
					alt: 'all',
					page: 0,
					categories: [],
					dates: [],
					genres: [],
				});
			}
		},
		[ location ],
	);

	const getUser = async () => {
		let { data, loading } = await client.query({
			query: CURRENT_USER_QUERY,
		});
		// let holden;
		// if (auth) {
		// 	holden = auth.currentUser;
		// 	//console.log(holden);
		// }
		// console.log(auth);

		if (data.currentUser) {
			setUser(data.currentUser);
			if (data.currentUser.location) setLocation(data.currentUser.location);
			else setLocation('Los Angeles, CA');
		}
	};

	const fetchEvents = async variables => {
		NProgress.start();
		let { data, error } = await client.query({
			query: ALL_EVENTS_QUERY,
			variables: variables,
		});
		if (data || error) NProgress.done();
		return data.getEvents;
	};

	const getEvents = async variables => {
		let newEvents = await fetchEvents(variables);

		let events = {
			...newEvents,
			events: _.chunk(newEvents.events, newEvents.events.length / 2),
		};

		setEvents(events);
	};

	const loadMore = async page => {
		if (page < events.page_count - 1) {
			let data = await fetchEvents({
				location: location,
				page: page + 1,
			});
			let moarEvents = [ ..._.flatten(events.events), ...data.events ];

			let newEvents = {
				...data,
				events: _.chunk(moarEvents, moarEvents.length / 3),
			};
			setEvents(newEvents);
		}
	};

	const handleCompleted = async () => {
		let { data, error } = await client.query({
			query: CURRENT_USER_QUERY,
		});
		if (data || error) NProgress.done();

		if (data.currentUser) {
			setUser(data.currentUser);
		}
	};

	if (!events.events.length) return <div />;
	else
		return (
			<div className={classes.section} style={{ paddingTop: '40px' }}>
				{newUser && <NewUser />}
				<div className={classes.container}>
					<Fragment>
						<IconButton
							// color="inherit"
							aria-label='Open drawer'
							onClick={() => setDrawerOpen(!drawerOpen)}
							className={classNames(classes.menuButton, drawerOpen && classes.hide)}
						>
							<Menu />
						</IconButton>
						<Drawer
							//className={classes.drawer}
							variant='persistent'
							anchor='left'
							open={drawerOpen}
							// classes={{
							// 	paper: classes.drawerPaper,
							// }}
						>
							<div style={{ padding: '0 20px' }}>
								{' '}
								<IconButton onClick={() => setDrawerOpen()}>
									{theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
								</IconButton>
								<LocationSearch setLocation={setLocation} />
								<p style={{ margin: 0 }}>Showing events near {location}.</p>
								<Mutation
									mutation={UPDATE_LOCATION_MUTATION}
									variables={{ city: location }}
									onCompleted={handleCompleted}
								>
									{(updateLocation, { error, loading, called }) => {
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
						</Drawer>
						<GridContainer>
							<GridItem md={12} sm={9}>
								<GridContainer>
									<GridItem sm={6} md={6} lg={6}>
										<InfiniteScroll
											pageStart={0}
											loadMore={loadMore}
											hasMore={page < events.page_count}
											threshold={400}
											loader={<div key={0} />}
										>
											{events.events[0].map(event => (
												<Event event={event} key={event.id} user={user} />
											))}
										</InfiniteScroll>
									</GridItem>

									<GridItem sm={6} md={6} lg={6}>
										{events.events[1] &&
											events.events[1].map(event => (
												<Event event={event} key={event.id} user={user} />
											))}
									</GridItem>
									{/* <GridItem sm={6} md={4} lg={4}>
										{events.events[2] &&
											events.events[2].map(event => (
												<Event event={event} key={event.id} user={user} />
											))}
									</GridItem> */}
								</GridContainer>
							</GridItem>
						</GridContainer>
					</Fragment>
				</div>
			</div>
		);
};

export default withApollo(withStyles(styles, { withTheme: true })(Events));
