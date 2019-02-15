import React, { useState, useEffect, Fragment } from 'react';

import EventsQuery from '../Queries/AllEvents';
import Filters from './Filters';
import Event from './Event';
import Location from '../Queries/Location';
import GridContainer from '../../styledComponents/Grid/GridContainer';
import GridItem from '../../styledComponents/Grid/GridItem';
import Paginations from '../../styledComponents/Pagination/Pagination';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from '../../static/jss/material-kit-pro-react/views/ecommerceSections/productsStyle.jsx';

const Events = ({ classes }) => {
	const [page, setPage] = useState(1);
	return (
		<Location>
			{({ data }) => {
				let { getLocation } = data;
				return (
					<div className={classes.section} style={{ paddingTop: '40px' }}>
						<div className={classes.container}>
							<h2 style={{ textAlign: 'center' }}>Upcoming Events Near You</h2>
							{data.getLocation ? (
								<EventsQuery
									variables={{
										location: getLocation.city,
										alt: getLocation.county,
										page: page,
										categories: [],
										dates: []
									}}
								>
									{({ data, error, loading, refetch }) => (
										<Fragment>
											<GridContainer>
												<Filters refetch={refetch} location={getLocation.location} page={page} />

												<GridItem md={9} sm={9}>
													{loading && <p>Loading...</p>}
													{error && <p>Error: {error.message}</p>}
													{!loading && !error && (
														<GridContainer>
															{data.getEvents.events.map(event => (
																<Event event={event} key={event.id} />
															))}
														</GridContainer>
													)}
												</GridItem>
												{!loading && !error && (
													<Paginations
														pages={[
															{ text: 'PREV' },

															{
																text:
																	data.getEvents.page_number > 2 && data.getEvents.page_number - 2,
																onClick: () => setPage(data.getEvents.page_number - 2)
															},
															{
																text:
																	data.getEvents.page_number > 1 && data.getEvents.page_number - 1,
																onClick: () => setPage(data.getEvents.page_number - 1)
															},
															{
																active: true,
																text: data.getEvents.page_number
															},
															{
																text: data.getEvents.page_number + 1,
																onClick: () => setPage(data.getEvents.page_number + 1)
															},
															{
																text: data.getEvents.page_number + 2,
																onClick: () => setPage(data.getEvents.page_number + 2)
															},
															{ text: '...' },
															{ text: data.getEvents.page_count },

															{ text: 'NEXT' }
														]}
													/>
												)}
											</GridContainer>
										</Fragment>
									)}
								</EventsQuery>
							) : (
								<div>getting location</div>
							)}
						</div>
					</div>
				);
			}}
		</Location>
	);
};

export default withStyles(styles)(Events);
