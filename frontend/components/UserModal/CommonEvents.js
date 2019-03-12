import React, { useState, useEffect, Fragment, useRef } from 'react';
import { useQuery, useMutation } from 'react-apollo-hooks';

import { USER_QUERY, SHARED_EVENTS_QUERY } from '../Queries/OtherUser';
import withStyles from '@material-ui/core/styles/withStyles';

import Card from '../../styledComponents/Card/Card';
import CardHeader from '../../styledComponents/Card/CardHeader';
import CardFooter from '../../styledComponents/Card/CardFooter';
import CardBody from '../../styledComponents/Card/CardBody';
import GridItem from '../../styledComponents/Grid/GridItem';
import GridContainer from '../../styledComponents/Grid/GridContainer';
import Button from '../../styledComponents/CustomButtons/Button.jsx';
//styles
import CardStyles from '../../static/jss/material-kit-pro-react/views/componentsSections/sectionCards';

const CommonEvents = ({ classes, id }) => {
	const { data } = useQuery(SHARED_EVENTS_QUERY, { variables: { id } });
	if (!data.getSharedEvents) return <div>loading</div>;
	return (
		<Fragment>
			{/* <h4 style={{textAlign: 'center'}}className={classes.title}>Events in common</h4> */}
			<GridContainer>
				{data.getSharedEvents.length ? (
					data.getSharedEvents.map(event => (
						<GridItem sm={12} md={12} lg={12} key={event.id}>
							<Card
								background
								style={{
									position: 'relative',
									border: '4px solid #4cb5ae',
									borderRadius: '11px',
									backgroundImage: `url(${event.image_url})`,
									marginTop: '0',
									marginBottom: '0',
								}}
							>
								<CardBody
									background
									style={{
										maxWidth: '100%',
										padding: '10px',
										display: 'flex',
										alignItems: 'center',
										minHeight: '180px',
									}}
								>
									{' '}
									<h4 className={classes.cardTitleWhite}>{event.title}</h4>
								</CardBody>
							</Card>
						</GridItem>
					))
				) : (
					<div>No shared events!</div>
				)}
			</GridContainer>
		</Fragment>
	);
};

export default withStyles(CardStyles)(CommonEvents);
