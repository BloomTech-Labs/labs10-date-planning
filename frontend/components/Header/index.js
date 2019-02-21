import React, { useEffect } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import navbarsStyle from '../../static/jss/material-kit-pro-react/views/componentsSections/navbarsStyle.jsx';
import Router, { withRouter } from 'next/router';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import NProgress from 'nprogress';

// @material-ui/icons
import Search from '@material-ui/icons/Search';
import Email from '@material-ui/icons/Email';
import Face from '@material-ui/icons/Face';
import Settings from '@material-ui/icons/Settings';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Explore from '@material-ui/icons/Explore';
import LocalActivity from '@material-ui/icons/LocalActivity';
// core components
import GridContainer from '../../styledComponents/Grid/GridContainer.jsx';
import GridItem from '../../styledComponents/Grid/GridItem.jsx';
import Header from '../../styledComponents/Header/Header.jsx';
import CustomInput from '../../styledComponents/CustomInput/CustomInput.jsx';
import CustomDropdown from '../../styledComponents/CustomDropdown/CustomDropdown.jsx';
import Button from '../../styledComponents/CustomButtons/Button.jsx';
import image from '../../static/img/bg.jpg';
import profileImage from '../../static/img/placeholder.jpg';
import Logo from '../../static/img/up4LogoWhite.png';

import User from '../Queries/User';
import { CURRENT_USER_QUERY } from '../Queries/User';

Router.onRouteChangeStart = () => {
	NProgress.start();
};
Router.onRouteChangeComplete = () => {
	NProgress.done();
};

Router.onRouteChangeError = () => {
	NProgress.done();
};

const SIGNOUT_MUTATION = gql`
	mutation SIGNOUT_MUTATION {
		signout {
			message
		}
	}
`;
const Nav = ({ classes }) => {
	const handleClick = (e, signout) => {
		if (e === 'Sign out') {
			signout();
		} else {
			Router.push(`/${e.toLowerCase()}`);
		}
	};
	return (
		<User>
			{({ data: { currentUser } }) => (
				<Header
					style={{zIndex:'2'}}
					// style={{backgroundImage: 'linear-gradient(to right top, #4cb5ae, #58bdbc, #65c6ca, #72ced7, #81d6e3)'}}
					color='primary'
					brand={Logo}
					// color='primary'
					links={
						<List className={classes.list + ' ' + classes.mlAuto}>
							<ListItem className={classes.listItem}>
								<Button
									href='#pablo'
									className={classes.navLink}
									onClick={e => {
										e.preventDefault();
										Router.push('/');
									}}
									color='transparent'
								>
									<Explore /> Discover
								</Button>
							</ListItem>
							<ListItem className={classes.listItem}>
								<Button
									href='#pablo'
									className={classes.navLink}
									onClick={e => {
										e.preventDefault();
										Router.push('/dates');
									}}
									color='transparent'
								>
									<AccountCircle /> Profile
								</Button>
							</ListItem>
							<Mutation
								mutation={SIGNOUT_MUTATION}
								refetchQueries={[ { query: CURRENT_USER_QUERY } ]}
							>
								{(signout, { called }) => {
									if (called) Router.replace('/joinus');
									return (
										<ListItem className={classes.listItem}>
											<CustomDropdown
												left
												caret={false}
												hoverColor='dark'
												dropdownHeader={
													currentUser && currentUser.firstName
												}
												buttonText={
													<img
														src={
															currentUser &&
															currentUser.imageThumbnail ? (
																currentUser.imageThumbnail
															) : (
																profileImage
															)
														}
														className={classes.img}
														alt='profile'
													/>
												}
												buttonProps={{
													className:
														classes.navLink +
														' ' +
														classes.imageDropdownButton,
													color: 'transparent',
												}}
												dropdownList={[ 'Billing', 'Sign out' ]}
												onClick={e => handleClick(e, signout)}
											/>
										</ListItem>
									);
								}}
							</Mutation>
						</List>
					}
				/>
			)}
		</User>
	);
};

export default withStyles(navbarsStyle)(Nav);
