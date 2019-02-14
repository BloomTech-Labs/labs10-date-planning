import React, { useState, useEffect } from 'react';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Event from './Event';
import Location from '../Queries/Location';
import GridContainer from '../../styledComponents/Grid/GridContainer';
import Paginations from '../../styledComponents/Pagination/Pagination';

export const ALL_EVENTS_QUERY = gql`
	query ALL_EVENTS_QUERY($location: String!, $page: Int) {
		getEvents(location: $location, page: $page) {
			page_count
			total_items
			page_number
			events {
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
	}
`;

const Events = () => {
	const [ page, setPage ] = useState(1);
	return (
		<Location>
			{({ data }) => {
				return (
					<div
						style={{ padding: '10px 50px' }}
						// style={{
						// 	maxWidth: 'calc(100% - 200px)',
						// 	marginLeft: '200px',
						// 	height: '100%',
						// }}
					>
						<h1 style={{ textAlign: 'center' }}>Upcoming Events Near You</h1>
						{data.getLocation ? (
							<Query
								query={ALL_EVENTS_QUERY}
								variables={{ location: data.getLocation.location, page: page }}
							>
								{({ data, error, loading }) => {
									if (loading) return <p>Loading...</p>;
									if (error) return <p>Error: {error.message}</p>;

									return (
										<div style={{ height: '100%' }}>
											<GridContainer>
												{data.getEvents.events.map(event => (
													<Event event={event} key={event.id} />
												))}
											</GridContainer>
											<Paginations
												pages={[
													{ text: 'PREV' },

													{
														text:
															data.getEvents.page_number > 2 &&
															data.getEvents.page_number - 2,
														onClick: () =>
															setPage(data.getEvents.page_number - 2),
													},
													{
														text:
															data.getEvents.page_number > 1 &&
															data.getEvents.page_number - 1,
														onClick: () =>
															setPage(data.getEvents.page_number - 1),
													},
													{
														active: true,
														text: data.getEvents.page_number,
													},
													{
														text: data.getEvents.page_number + 1,
														onClick: () =>
															setPage(data.getEvents.page_number + 1),
													},
													{
														text: data.getEvents.page_number + 2,
														onClick: () =>
															setPage(data.getEvents.page_number + 2),
													},
													{ text: '...' },
													{ text: data.getEvents.page_count },

													{ text: 'NEXT' },
												]}
											/>
										</div>
									);
								}}
							</Query>
						) : (
							<div>getting location</div>
						)}
					</div>
				);
			}}
		</Location>
	);
};

export default Events;
