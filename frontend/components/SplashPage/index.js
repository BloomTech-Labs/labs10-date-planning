import React, { useEffect, useState } from 'react';
import Parallax from '../../styles/components/Parallex';
import GridContainer from '../../styles/components/Grid/GridContainer';
import GridItem from '../../styles/components/Grid/GridItem';
import Register from './Register';
import Login from './Login';
import withStyles from '@material-ui/core/styles/withStyles';
import Styles from '../../styles/components/Splash/styles';

const Splash = ({ classes }) => {
	useEffect(() => {
		window.scrollTo(0, 0);
		// document.body.scrollTop = 0;
	}, []);
	return (
		<Parallax>
			<div className={classes.container}>
				<GridContainer>
					<GridItem xs={12} sm={6} md={6}>
						<h1 className={classes.title}>Where will up4 take you?</h1>
						<h4>
							Trying something new can feel like a chore. Why is that? Are we boring?
							Unimaginative? Chicken? We don’t think so. Whether it’s a restaurant, an
							art exhibit, a concert, or something else, you’re surrounded by new ways
							to enjoy your life. Sign up for Up4 today to let us help you help your
							dating life.
						</h4>
						<div>
							<Register />
							<Login />
						</div>
					</GridItem>
				</GridContainer>
			</div>
		</Parallax>
	);
};

export default withStyles(Styles)(Splash);
