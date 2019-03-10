import React from 'react';
import Link from 'next/link';
import moment from 'moment';
import { useQuery } from 'react-apollo-hooks';
import { USER_EVENTS_QUERY } from '../Queries/UserEvents';
//MUI
import withStyles from '@material-ui/core/styles/withStyles';
//styled components
import GridContainer from '../../styledComponents/Grid/GridContainer';
import GridItem from '../../styledComponents/Grid/GridItem';
import SnackbarContent from '../../styledComponents/Snackbar/SnackbarContent.jsx';
import Button from '../../styledComponents/CustomButtons/Button';
import NavPills from '../../styledComponents/NavPills/NavPills.jsx';
//QM
import User from '../Queries/User';
//components
import Date from './Date';
//styles
import styles from '../../static/jss/material-kit-pro-react/views/ecommerceSections/productsStyle.jsx';
import '../../styles/Settings/Snackbar.scss';
import { timeline } from 'popmotion';

const Dates = ({ classes, user }) => {
	const { data, error } = useQuery(USER_EVENTS_QUERY);
	console.log(data, error);
	if (!data.userEvents) return <div>loading</div>;
	let previousDates = data.userEvents.filter(date =>
		moment(date.times[date.times.length - 1]).isBefore(moment()),
	);
	let futureDates = data.userEvents.filter(date =>
		moment(date.times[date.times.length - 1]).isSameOrAfter(moment()),
	);
	const prevDates = (
		<GridContainer>
			{previousDates ? (
				previousDates.map(date => <Date key={date.id} date={date} currentUser={user} />)
			) : (
				<div>
					<p>You have no previous dates!</p>
				</div>
			)}
		</GridContainer>
	);
	const futDates = (
		<GridContainer>
			{futureDates ? (
				futureDates.map(date => <Date key={date.id} date={date} currentUser={user} />)
			) : (
				<div>
					<p>You have no previous dates!</p>
				</div>
			)}
		</GridContainer>
	);
	return (
		<div className={classes.container}>
			<GridContainer>
				<GridItem xs={12} sm={12} md={12} lg={12}>
					{' '}
					<NavPills
						alignCenter
						color='primary'
						active={1}
						tabs={[
							{
								tabButton: 'Previous Dates',
								tabContent: prevDates,
							},
							{
								tabButton: 'Future Dates',
								tabContent: futDates,
							},
						]}
					/>
				</GridItem>
				{/* <GridContainer>
					{data.userEvents.length ? (
						data.userEvents.map(date => (
							<Date key={date.id} date={date} currentUser={user} />
						))
					) : (
						<div>
							<p>You don't have any dates yet!</p>
						</div>
					)} */}
			</GridContainer>
		</div>
	);
};

export default withStyles(styles)(Dates);
