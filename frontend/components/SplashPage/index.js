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
import Button from '../../styledComponents/CustomButtons/Button';
//styles
import Styles from '../../static/jss/material-kit-pro-react/views/landingPageStyle';
import { spacing } from '@material-ui/system';
import Logo from '../Header/UpFor';

const Splash = ({ classes }) => {
	const [ registerShowing, setRegisterShowing ] = useState(false);
	const [ loginShowing, setLoginShowing ] = useState(false);
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

						<div className={classes.tagline}>
							<Typography style={{ color: '#fafafa' }} variant='h2'>
								Meet People. Go Places.
							</Typography>
						</div>
						<div id='javascriptComponents'>
							<GridContainer
								style={{ flexDirection: 'column', alignItems: 'center' }}
							>
								<Button
									className={classes.registerButton}
									color='danger'
									size='lg'
									style={{ fontSize: '30px' }}
									onClick={() => setRegisterShowing(true)}
								>
									Sign Up
								</Button>

								<Button color='primary' onClick={() => setLoginShowing(true)}>
									Log In
								</Button>
							</GridContainer>
						</div>
					</GridItem>
					<Register showing={registerShowing} setShowing={setRegisterShowing} />
					<Login showing={loginShowing} setShowing={setLoginShowing} />
				</GridContainer>
			</div>
		</Parallax>
	);
};

export default withStyles(Styles)(Splash);
