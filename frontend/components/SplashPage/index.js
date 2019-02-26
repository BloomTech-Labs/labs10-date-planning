import React, { useEffect, useState } from 'react';
//MUI
import withStyles from '@material-ui/core/styles/withStyles';
import { Typography } from '@material-ui/core'
//components
import Register from './Register';
import Login from './Login';
//styled components
import Parallax from '../../styledComponents/Parallax/Parallax';
import GridContainer from '../../styledComponents/Grid/GridContainer';
import GridItem from '../../styledComponents/Grid/GridItem';
//styles
import Styles from '../../static/jss/material-kit-pro-react/views/landingPageStyle';

import Logo from '../../static/img/up4Logo.png'

const Splash = ({ classes }) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<Parallax>
			<div className={classes.container}>
				<GridContainer>
					
					<GridItem container justify='center' alignItems='center' direction='column' xs={12} sm={12} md={12}>
						<img style={{height: '406px', width: '670px'}} src={Logo} />
						<Typography color='secondary' variant='h4'>Your City is Alive.</Typography>
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
