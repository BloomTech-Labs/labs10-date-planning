import React from 'react';

import User from '../Queries/User';
import Date from './Date';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from '../../static/jss/material-kit-pro-react/views/ecommerceSections/productsStyle.jsx';

const Dates = ({ classes }) => {
	return (
		<User>
			{({ data: { currentUser } }) => {
				console.log(currentUser.events);
				return (
					<div className={classes.section} style={{ paddingTop: '40px' }}>
						<div className={classes.container}>
							<h2 style={{ textAlign: 'center' }}>Your Dates</h2>
							{currentUser.events.length ? (
								currentUser.events.map(date => <Date key={date.id} date={date} />)
							) : (
								<div>
									<p>You don't have any dates yet!</p>
								</div>
							)}
						</div>
					</div>
				);
			}}
		</User>
	);
};

export default withStyles(styles)(Dates);
