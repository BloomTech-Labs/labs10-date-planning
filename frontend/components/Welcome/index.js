import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '../../styledComponents/CustomButtons/Button';
import style from '../../static/jss/material-kit-pro-react/views/signupPageStyle.jsx';

const Welcome = ({ classes, user }) => {
	console.log(user);
	return (
		<div
			className={classes.pageHeader}
			style={{
				backgroundImage:
					'url(https://images.unsplash.com/photo-1473073957860-e6eb51b91b47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80)',
				backgroundSize: 'cover',
				backgroundPosition: 'top center',
			}}
		>
			<div className={classes.container}>
				{' '}
				<h2>Welcome to Up4 {user.firstName}!</h2>
				<h3>Tell us a little about yourself...</h3>
				<Button>Get Started</Button>
			</div>
		</div>
	);
};

export default withStyles(style)(Welcome);
