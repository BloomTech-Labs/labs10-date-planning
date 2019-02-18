import React, { useState } from 'react';
import { Query } from 'react-apollo';
import moment from 'moment';
import AddIcon from '@material-ui/icons/Add';

import withStyles from '@material-ui/core/styles/withStyles';

import Card from '../../styledComponents/Card/Card';
import CardHeader from '../../styledComponents/Card/CardHeader';
import CardFooter from '../../styledComponents/Card/CardFooter';
import CardBody from '../../styledComponents/Card/CardBody';
import Warning from '../../styledComponents/Typography/Warning';

import CardStyles from '../../static/jss/material-kit-pro-react/views/componentsSections/sectionCards';

const DateView = ({ date, classes }) => {
	return (
		<Card blog>
			{date.image_url && (
				<CardHeader image>
					<a href='#pablo' onClick={e => e.preventDefault()}>
						<img src={date.image_url} alt='...' />
					</a>
					<div
						className={classes.coloredShadow}
						style={{
							backgroundImage: `url(${date.image_url})`,
							opacity: '1',
						}}
					/>
				</CardHeader>
			)}{' '}
			<CardBody className={classes.cardBodyRotate}>
				<Warning>
					<h6 className={classes.cardCategory}>{date.location}</h6>
				</Warning>
				<h4 className={classes.cardTitle}>
					<a href='#pablo' onClick={e => e.preventDefault()}>
						{date.title}
					</a>
				</h4>
			</CardBody>
			<CardFooter>
				<div className={`${classes.stats} ${classes.mlAuto}`} style={{ display: 'block' }}>
					{/* <Schedule /> */}
					{date.times.map(ev => (
						<div key={ev}>{moment(ev).format('dddd, MMMM Do, h:mm a')}</div>
					))}
				</div>
			</CardFooter>
		</Card>
	);
};

export default withStyles(CardStyles)(DateView);
