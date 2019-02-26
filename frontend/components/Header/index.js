import React, { useEffect } from 'react';
import Router, { withRouter } from 'next/router';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import NProgress from 'nprogress';

//MUI
import withStyles from '@material-ui/core/styles/withStyles';
import { List, ListItem, Badge, IconButton } from '@material-ui/core';
import { AccountCircle, Explore, Mail } from '@material-ui/icons';
import navbarsStyle from '../../static/jss/material-kit-pro-react/views/componentsSections/navbarsStyle.jsx';
//Q&M
import User, { CURRENT_USER_QUERY } from '../Queries/User';
// styled components
import GridContainer from '../../styledComponents/Grid/GridContainer.jsx';
import GridItem from '../../styledComponents/Grid/GridItem.jsx';
import Header from '../../styledComponents/Header/Header.jsx';
import CustomInput from '../../styledComponents/CustomInput/CustomInput.jsx';
import CustomDropdown from '../../styledComponents/CustomDropdown/CustomDropdown.jsx';
import Button from '../../styledComponents/CustomButtons/Button.jsx';
//assets
import image from '../../static/img/bg.jpg';
import profileImage from '../../static/img/placeholder.jpg';
import Logo from '../../static/img/up4LogoWhite.png';
//utils
//import redirect from '../../utils/redirect';
Router.onRouteChangeComplete = () => {
	NProgress.done(true);
};

const SIGNOUT_MUTATION = gql`
	mutation SIGNOUT_MUTATION {
		signout {
			message
		}
	}
`;
const Nav = ({ classes, color }) => {
	const handleClick = (e, signout, client) => {
		if (e === 'Sign out') {
			signout();
			client.cache.reset().then(() => {
				// Redirect to a more useful page when signed out
				//redirect({}, '/joinus');
				Router.push('/joinus');
			});
		} else {
			Router.push(`/billing`);
		}
	};
	return (
		<User>
			{({ data: { currentUser }, client }) => (
				<Header
					color={color}
					brand={Logo}
					links={
						<List className={classes.list + ' ' + classes.mlAuto}>
							<ListItem className={classes.listItem}>
								<Button
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
									className={classes.navLink}
									onClick={e => {
										e.preventDefault();
										Router.push('/profile');
									}}
									color='transparent'
								>
									<AccountCircle /> Me
								</Button>
							</ListItem>
							<ListItem className={classes.listItem}>
								<Button
									aria-label='4 pending messages'
									className={classes.navLink}
									color='transparent'
								>
									<Badge badgeContent={4} color='error'>
										<Mail />
									</Badge>
								</Button>
							</ListItem>
							<Mutation
								mutation={SIGNOUT_MUTATION}
								refetchQueries={[ { query: CURRENT_USER_QUERY } ]}
								awaitRefetchQueries
							>
								{(signout, { called }) => {
									{
										/* if (called) Router.push('/joinus'); */
									}
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
												onClick={e => handleClick(e, signout, client)}
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
