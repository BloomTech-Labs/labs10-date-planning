import React, { Fragment, useEffect } from 'react';
import { Mutation, Query } from 'react-apollo';
import _ from 'lodash';
import { withRouter } from 'next/router';
import NProgress from 'nprogress';
import InfiniteScroll from 'react-infinite-scroller';
import classNames from 'classnames';
import { adopt } from 'react-adopt';
import { State, Value, Toggle } from 'react-powerplug';
//MUI
import withStyles from '@material-ui/core/styles/withStyles';
import { Drawer, IconButton } from '@material-ui/core';
import { Menu, ChevronLeft } from '@material-ui/icons';
//Q&M
import { ALL_EVENTS_QUERY } from '../Queries/AllEvents';
import { CURRENT_USER_QUERY } from '../Queries/User';
import { UPDATE_USER_MUTATION } from '../Mutations/updateUser';
//components
import Filters from './Filters';
import Event from './Event';
import LocationSearch from './LocationSearch';
import NewUser from './NewUser';
import UserModal from '../UserModal/';
import Primary from '../../styledComponents/Typography/Primary';
//styled components
import GridContainer from '../../styledComponents/Grid/GridContainer';
import GridItem from '../../styledComponents/Grid/GridItem';
//styles
import styles from '../../static/jss/material-kit-pro-react/views/ecommerceSections/productsStyle.jsx';

const Composed = adopt({
	drawer: <Toggle initial={false} />,
	page: <Value initial={0} />,

	user: ({ render }) => <Query query={CURRENT_USER_QUERY}>{render}</Query>,
	location: ({ user, render }) => (
		// not sure what happened but the default for this value is not working at all
		// had to add it into the Query to make site work
		<Value initial={user.data.currentUser && user.data.currentUser.location}>{render}</Value>
	),
	filters: ({ render }) => (
		<State
			initial={{
				cats: [],
				genres: [],
				dates: [],
			}}
		>
			{render}
		</State>
	),
	getEvents: ({ page, location, filters, render }) => (
		<Query
			query={ALL_EVENTS_QUERY}
			variables={{
				location: location.value || 'Los Angeles, CA',
				page: page.value,
				categories: filters.state.cats,
				genres: filters.state.genres,
				dates: filters.state.dates,
			}}
			//onCompleted={() => NProgress.done()}
			onError={() => NProgress.done()}
		>
			{render}
		</Query>
	),

	updateUser: ({ render }) => (
		<Mutation
			mutation={UPDATE_USER_MUTATION}
			onCompleted={() => NProgress.done()}
			onError={() => NProgress.done()}
		>
			{render}
		</Mutation>
	),
});

const Events = React.memo(({ classes, router, href, ...props }) => {
	useEffect(() => {
		NProgress.start();
	}, []);
	return (
		<Composed>
			{({
				getEvents: { data, refetch, loading },
				updateUser,
				drawer,
				location,
				filters,
				user: { data: { currentUser } },
			}) => {
				let getEvents =
					data && data.getEvents && data.getEvents.events
						? data.getEvents
						: { events: [] };
				return (
					<div className={classes.background}>
						{router.query.user && (
							<UserModal user={router.query.user} currentUser={currentUser} />
						)}
						<svg
							style={{ width: 0, height: 0, position: 'absolute' }}
							aria-hidden='true'
							focusable='false'
						>
							<linearGradient id='favoriteID' x2='1' y2='1'>
								<stop offset='0%' stopColor='#FF8A8A' />
								<stop offset='50%' stopColor='#FF545F' />
								<stop offset='100%' stopColor='#ff101f' />
							</linearGradient>
						</svg>
						<svg
							style={{ width: 0, height: 0, position: 'absolute' }}
							aria-hidden='true'
							focusable='false'
						>
							<linearGradient id='chatID' x2='1' y2='1'>
								<stop offset='0%' stopColor='#81d6e3' />
								<stop offset='50%' stopColor='#15C0DA' />
								<stop offset='100%' stopColor='#81d6e3' />
							</linearGradient>
						</svg>
						{/* {newUser && <NewUser />} */}
						<div className={classes.container}>
							<Fragment>
								<IconButton
									style={{
										color: 'white',
										backgroundColor: 'transparent !important',
									}}
									aria-label='Open drawer'
									onClick={drawer.toggle}
									className={classNames(
										classes.menuButton,
										drawer.on && classes.hide,
									)}
								>
									<Menu />
								</IconButton>
								<Drawer
									classes={{ paper: classes.metaDrawer }}
									variant='persistent'
									anchor='left'
									open={drawer.on}
								>
									<div className={classes.drawer}>
										<IconButton
											className={classes.transparentButton}
											onClick={drawer.toggle}
										>
											<ChevronLeft />
										</IconButton>
										<LocationSearch setLocation={val => location.set(val)} />
										<p style={{ margin: 0 }}>
											Showing events near {location.value}.
										</p>
										<div className={classes.drawerContainer}>
											{currentUser &&
											currentUser.location !== location.value ? (
												<Primary>
													<b
														onClick={() => {
															NProgress.start();
															updateUser({
																variables: {
																	location: location.value,
																},
															});
														}}
														style={{
															cursor: 'pointer',
														}}
													>
														make default location?
													</b>
												</Primary>
											) : (
												<div style={{ height: '21px' }} />
											)}
										</div>
									</div>
									<Filters filters={filters} user={currentUser} />
								</Drawer>
								<GridContainer>
									<GridItem sm={12} md={12} sm={12}>
										{!loading ? (
											<GridContainer>
												<GridItem sm={12} md={6} lg={6}>
													{/* <InfiniteScroll
														pageStart={getEvents.page_number}
														loadMore={async p => {
															console.log(p, getEvents.page_count);
															if (p < getEvents.page_total - 1) {
																page.set(page.value + 1);
															}
														}}
														hasMore={page.value < getEvents.page_total}
														threshold={400}
														loader={<div key={0} />}
													> */}
													{getEvents &&
														getEvents.events
															.filter((e, i) => i % 2 === 0)
															.map(event => (
																<Event
																	event={event}
																	key={event.id}
																	refetch={refetch}
																	user={currentUser}
																/>
															))}

													{/* {getEvents.events.map(event => (
															<Event
																event={event}
																key={event.id}
																refetch={refetch}
																user={currentUser}
																location={location}
															/>
														))} */}
													{/* </InfiniteScroll> */}
												</GridItem>

												<GridItem sm={12} md={6} lg={6}>
													{getEvents &&
														getEvents.events
															.filter((e, i) => i % 2 !== 0)
															.map(event => (
																<Event
																	event={event}
																	key={event.id}
																	refetch={refetch}
																	user={currentUser}
																/>
															))}
												</GridItem>
											</GridContainer>
										) : (
											<div />
										)}
									</GridItem>
								</GridContainer>
							</Fragment>
						</div>
					</div>
				);
			}}
		</Composed>
	);
});

export default withRouter(withStyles(styles, { withTheme: true })(Events));
