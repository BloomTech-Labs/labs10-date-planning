import React, { useState, useEffect, Fragment } from 'react';
import { withApollo, Mutation, Query } from 'react-apollo';
import _ from 'lodash';
import NProgress from 'nprogress';
import InfiniteScroll from 'react-infinite-scroller';
import classNames from 'classnames';
import { adopt } from 'react-adopt';
import { State, Map, Value, Toggle } from 'react-powerplug';
//MUI
import withStyles from '@material-ui/core/styles/withStyles';
import { Drawer, Divider, IconButton } from '@material-ui/core';
import { Menu, ChevronLeft, ChevronRight } from '@material-ui/icons';
//Q&M
import { ALL_EVENTS_QUERY } from '../Queries/AllEvents';
import User, { CURRENT_USER_QUERY } from '../Queries/User';
import { UPDATE_USER_MUTATION } from '../Mutations/updateUser';
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

// import Prism from '../../static/img/prism.png'
import Triangles from '../../static/img/footer_lodyas.png';
import Wood from '../../static/img/office.png';

const Composed = adopt({
	drawer: <Toggle initial={false} />,
	page: <Value initial={0} />,

	user: ({ render }) => <Query query={CURRENT_USER_QUERY}>{render}</Query>,
	location: ({ user, render }) => (
		<Value initial={user.data.currentUser.location || 'Los Angeles, CA'}>{render}</Value>
	),
	filters: <State initial={{ cats: [], genres: [], dates: [] }} />,
	getEvents: ({ page, location, filters, render }) => (
		<Query
			query={ALL_EVENTS_QUERY}
			variables={{
				location: location.value,
				page: page.value,
				categories: filters.state.cats,
				genres: filters.state.genres,
				dates: filters.state.dates,
			}}
			onCompleted={() => NProgress.done()}
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

const Events = ({ classes, newUser }) => {
	return (
		<Composed>
			{({
				getEvents: { data: { getEvents }, refetch, loading, client },
				updateUser,
				drawer,
				location,
				page,
				filters,
				user: { data: { currentUser } },
			}) => {
				return (
					<div
						style={{
							paddingTop: '40px',
							backgroundImage: `url("https://www.transparenttextures.com/patterns/shattered-dark.png")`,
							backgroundColor: '#000000',
						}}
					>
						{/* <div className={classes.section}> */}
						{newUser && <NewUser />}
						<div className={classes.container}>
							<Fragment>
								<IconButton
									// color="inherit"
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
									//className={classes.drawer}
									variant='persistent'
									anchor='left'
									open={drawer.on}
									// classes={{
									// 	paper: classes.drawerPaper,
									// }}
								>
									<div style={{ padding: '0 20px', width: '250px' }}>
										{' '}
										<IconButton onClick={drawer.toggle}>
											<ChevronLeft />
										</IconButton>
										<LocationSearch setLocation={val => location.set(val)} />
										<p style={{ margin: 0 }}>
											Showing events near {location.value}.
										</p>
										<div
											style={{
												display: 'flex',
												alignItems: 'center',
											}}
										>
											{currentUser.location !== location.value ? (
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
									<Filters
										// location={location.value}
										// page={page.value}
										// refetch={refetch}
										filters={filters}
									/>
								</Drawer>
								<GridContainer>
									<GridItem md={12} sm={9}>
										{!loading ? (
											<GridContainer>
												<GridItem sm={6} md={6} lg={6}>
													<InfiniteScroll
														pageStart={0}
														loadMore={async page => {
															if (page > getEvents.page_count - 1) {
																await refetch({
																	variables: { page: page + 1 },
																});
															}
														}}
														hasMore={page.value < getEvents.page_count}
														threshold={400}
														loader={<div key={0} />}
													>
														{getEvents.events
															.filter((e, i) => i % 2 === 0)
															.map(event => (
																<Event
																	event={event}
																	key={event.id}
																	user={currentUser}
																	location={location}
																/>
															))}
													</InfiniteScroll>
												</GridItem>

												<GridItem sm={6} md={6} lg={6}>
													{getEvents.events
														.filter((e, i) => i % 2 !== 0)
														.map(event => (
															<Event
																event={event}
																key={event.id}
																user={currentUser}
																location={location}
															/>
														))}
												</GridItem>
												{/* <GridItem sm={6} md={4} lg={4}>
										{events.events[2] &&
											events.events[2].map(event => (
												<Event event={event} key={event.id} user={user} />
											))}
									</GridItem> */}
											</GridContainer>
										) : (
											<div>Loading</div>
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
};

export default withStyles(styles, { withTheme: true })(Events);
