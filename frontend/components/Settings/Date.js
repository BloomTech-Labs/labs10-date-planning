import React, { useState } from 'react';
import { Query } from 'react-apollo';
import moment from 'moment';
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import withStyles from '@material-ui/core/styles/withStyles';

import AddIcon from '@material-ui/icons/Add';
import Card from '../../styledComponents/Card/Card';
import CardHeader from '../../styledComponents/Card/CardHeader';
import CardFooter from '../../styledComponents/Card/CardFooter';
import CardBody from '../../styledComponents/Card/CardBody';
import Warning from '../../styledComponents/Typography/Warning';
import GridItem from '../../styledComponents/Grid/GridItem';
import CardStyles from '../../static/jss/material-kit-pro-react/views/componentsSections/sectionCards';
import Button from '../../styledComponents/CustomButtons/Button.jsx';

import '../../styles/Settings/Date.scss';

const DELETE_EVENT = gql`
	mutation deleteEvent($eventId: String!) {
		deleteEvent(eventId: $eventId) {
			message
		}
	}
`;

const DateView = ({ date, classes, client }) => {
	const deleteEvent = async eventId => {
		let { data, loading } = await client.mutate({
			mutation: DELETE_EVENT,
			variables: {
				eventId,
			},
		});
	};

	return (
		<GridItem sm={12} md={6} lg={6}>
			{console.log(date)}
			<Card blog>
				{date.url && (
					<CardHeader image>
						<a href='#pablo' onClick={e => e.preventDefault()}>
							<img src={date.url} alt='...' />
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
				<CardBody style={{ zIndex: '1' }} className={classes.cardBodyRotate}>
					{date.description && (
						<div className='gradient-box'>
							<span
							// style={{
							//   backgroundImage:
							//     "linear-gradient(to right top, #4cb5ae, #58bdbc, #65c6ca, #72ced7, #81d6e3)",
							//   color: "#000",
							//   borderRadius: "6px",
							//   padding: "10px"
							// }}
							// className={classes.cardCategory}
							>
								{date.description}
							</span>
						</div>
					)}

					<h4 className={classes.cardTitle}>
						<a
							classes={{ root: 'test' }}
							href='#pablo'
							onClick={e => e.preventDefault()}
						>
							{date.title}
						</a>
					</h4>
				</CardBody>
				<CardFooter>
					<div
						className={`${classes.stats} ${classes.mlAuto}`}
						style={{ display: 'block' }}
					>
						{/* <Schedule /> */}
						{date.times.map(ev => (
							<div key={ev}>{moment(ev).format('dddd, MMMM Do, h:mm a')}</div>
						))}
					</div>
					<Button
						className='button'
						onClick={() => {
							deleteEvent(date.id);
						}}
					>
						Delete
					</Button>
				</CardFooter>
			</Card>
		</GridItem>
	);
};

export default withApollo(withStyles(CardStyles)(DateView));
