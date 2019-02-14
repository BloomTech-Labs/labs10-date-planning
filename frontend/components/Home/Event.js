import React, { Component } from 'react';
import { Query } from 'react-apollo';

import GridItem from '../../styles/components/Grid/GridItem';
import Card from '../../styles/components/Card/Card';
import CardHeader from '../../styles/components/Card/CardHeader';
import CardBody from '../../styles/components/Card/CardBody';
import Warning from '../../styles/Typography/Warning';
import AddIcon from '@material-ui/icons/Add';
import Button from '../../styles/components/Button';

const Event = ({ event, classes }) => {
	return (
		<GridItem xs={12} sm={4} md={3}>
			<Card blog>
				{' '}
				<CardHeader image>
					<a href='#pablo' onClick={e => e.preventDefault()}>
						<img src={event.image_url} alt='...' />
					</a>
					<div
						className={classes.coloredShadow}
						style={{
							backgroundImage: `url(${event.image_url})`,
							opacity: '1',
						}}
					/>
				</CardHeader>
				<CardBody>
					<Warning>
						<h6 className={classes.cardCategory}>{event.location.venue}</h6>
					</Warning>
					<h4 className={classes.cardTitle}>
						<a href='#pablo' onClick={e => e.preventDefault()}>
							{event.title}
						</a>
					</h4>
				</CardBody>
				<Button
					justIcon
					round
					color='primary'
					style={{
						position: 'absolute',
						zIndex: 1,
						bottom: -18,
						left: 0,
						right: 0,
						margin: '0 auto',
					}}
				>
					<AddIcon />
				</Button>
			</Card>
		</GridItem>
	);
};

export default Event;
