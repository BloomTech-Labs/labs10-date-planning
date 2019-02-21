import React, { useEffect, useState } from 'react';
//MUI
import withStyles from '@material-ui/core/styles/withStyles';
//components
import Register from './Register';
import Login from './Login';
//styled components
import Parallax from '../../styledComponents/Parallax/Parallax';
import GridContainer from '../../styledComponents/Grid/GridContainer';
import GridItem from '../../styledComponents/Grid/GridItem';
//styles
import Styles from '../../static/jss/material-kit-pro-react/views/landingPageStyle';

const Splash = ({ classes }) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<Parallax>
			<div className={classes.container}>
				<GridContainer>
					<GridItem xs={12} sm={6} md={6}>
						<h1 className={classes.title}>
							Music. Food. Special Events. Your city is alive. What are you up for?
						</h1>
						<h4>
							Exciting events are all around you but they can be hard to find. Up4
							helps ensure you'll never miss another adventure.
						</h4>
						<div>
							<Register />
							<Login className='login' />
						</div>
					</GridItem>
				</GridContainer>
			</div>
		</Parallax>
	);
};

export default withStyles(Styles)(Splash);
