import React, { useState } from 'react';
import { Query } from 'react-apollo';
import moment from 'moment';
import AddIcon from '@material-ui/icons/Add';

import withStyles from '@material-ui/core/styles/withStyles';

import GridItem from '../../styledComponents/Grid/GridItem';
import Button from '../../styledComponents/CustomButtons/Button';
import Card from '../../styledComponents/Card/Card';
import CardHeader from '../../styledComponents/Card/CardHeader';
import CardFooter from '../../styledComponents/Card/CardFooter';
import CardBody from '../../styledComponents/Card/CardBody';
import Warning from '../../styledComponents/Typography/Warning';

import CardStyles from '../../static/jss/material-kit-pro-react/views/componentsSections/sectionCards';

const Event = ({ event, classes }) => {
	console.log(event);
	return (
		<GridItem xs={12} sm={6} md={4} lg={3}>
			<Card blog>
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
				<CardBody className={classes.cardBodyRotate}>
					<Warning>
						<h6 className={classes.cardCategory}>{event.location.venue}</h6>
					</Warning>
					<h4 className={classes.cardTitle}>
						<a href='#pablo' onClick={e => e.preventDefault()}>
							{event.title}
						</a>
					</h4>
				</CardBody>
				<CardFooter>
					<div
						className={`${classes.stats} ${classes.mlAuto}`}
						style={{ display: 'block' }}
					>
						{/* <Schedule /> */}
						{event.times.map(ev => (
							<div key={ev}>{moment(ev).format('dddd, MMMM Do, h:mm a')}</div>
						))}
					</div>
				</CardFooter>
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

export default withStyles(CardStyles)(Event);
