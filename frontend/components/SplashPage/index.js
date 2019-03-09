import React, { useEffect } from 'react';
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
import { spacing } from '@material-ui/system'
import Logo from '../Header/UpFor';

const Splash = ({ classes }) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<Parallax image='https://images.unsplash.com/photo-1534085838602-9624ac7ab9e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80'>
			<div className={classes.container}>
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
						<Logo main />
						{/* <img
							className={classes.logo}
							src={Logo}
						/> */}
						<div className={classes.tagline}>
							<Typography style={{ color: '#fafafa' }} variant='h2'>
								Meet People. Go Places.
							</Typography>
						</div>
						<div id='javascriptComponents'>
							<GridContainer
								style={{ flexDirection: 'column', alignItems: 'center'}}
							>
								<Register
								style={{ padding: '0px 0px 0px 0px'}} />

								<Login />
							</GridContainer>
						</div>
					</GridItem>
				</GridContainer>
			</div>
		</Parallax>
	);
};

export default withStyles(Styles)(Splash);
