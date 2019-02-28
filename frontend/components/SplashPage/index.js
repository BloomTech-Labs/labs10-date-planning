import React, { useEffect, useState } from 'react';
//MUI
import withStyles from '@material-ui/core/styles/withStyles';
import { Typography } from '@material-ui/core';
//components
import Register from './Register';
import Login from './Login';
//styled components
import Parallax from '../../styledComponents/Parallax/Parallax';
import GridContainer from '../../styledComponents/Grid/GridContainer';
import GridItem from '../../styledComponents/Grid/GridItem';
//styles
import Styles from '../../static/jss/material-kit-pro-react/views/landingPageStyle';

import Logo from '../../static/img/up4Logo.png';

const Splash = ({ classes }) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<Parallax image='https://images.unsplash.com/photo-1534085838602-9624ac7ab9e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80'>
			<div className={classes.container} style={{ paddingTop: '20px' }}>
				<GridContainer>
					<GridItem
						container
						justify='center'
						alignItems='center'
						direction='column'
						xs={12}
						sm={12}
						md={12}
					>
						<img
							style={{ maxHeight: '406px', maxWidth: '670px', width: '100%' }}
							src={Logo}
						/>
						<div
							style={{
								backgroundColor: 'rgba(0, 0, 0, 0.4)',
								padding: '17px',
								borderRadius: '20px',
								margin: '10px auto',
							}}
						>
							<Typography style={{ color: '#fafafa' }} variant='h2'>
								Meet People. Go Places.
							</Typography>
						</div>
						<div className={`${classes.section} cd-section`} id='javascriptComponents'>
							<GridContainer>
								<Register />

								<Login className='login' />
							</GridContainer>
						</div>
					</GridItem>
				</GridContainer>
			</div>
		</Parallax>
	);
};

export default withStyles(Styles)(Splash);
