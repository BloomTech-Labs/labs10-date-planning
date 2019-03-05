import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import NProgress from 'nprogress';
import { useQuery } from 'react-apollo-hooks';
import useInterval from '@rooks/use-interval';

//MUI
import withStyles from '@material-ui/core/styles/withStyles';
import { List, ListItem, Badge } from '@material-ui/core';
import { AccountCircle, Explore, Mail } from '@material-ui/icons';
import navbarsStyle from '../../static/jss/material-kit-pro-react/views/componentsSections/navbarsStyle.jsx';
//Q&M

import User, { CURRENT_USER_QUERY } from '../Queries/User';
import { ALL_CHATS_QUERY } from '../Queries/AllChats';
// styled components
// import GridContainer from '../../styledComponents/Grid/GridContainer.jsx';
// import GridItem from '../../styledComponents/Grid/GridItem.jsx';
import Header from '../../styledComponents/Header/Header.jsx';
// import CustomInput from '../../styledComponents/CustomInput/CustomInput.jsx';
import CustomDropdown from '../../styledComponents/CustomDropdown/CustomDropdown.jsx';
import Button from '../../styledComponents/CustomButtons/Button.jsx';
//assets
// import image from '../../static/img/bg.jpg';
import profileImage from '../../static/img/placeholder.jpg';
import Logo from '../../static/img/up4LogoWhite.png';

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
	const { data, loading, refetch } = useQuery(ALL_CHATS_QUERY);

	useEffect(() => {
		start();
		return () => {
			stop();
		};
	}, []);
	const { start, stop } = useInterval(() => {
		refetch();
	}, 60000);

	const [ newMessages, setNewMessages ] = useState([]);
	useEffect(
		() => {
			if (data.getUserChats) {
				setNewMessages(
					data.getUserChats
						.filter(chat => chat.messages.some(message => !message.seen))
						.flat(),
				);
			}
		},
		[ loading ],
	);

	const handleClick = (e, signout, client) => {
		if (e === 'Sign out') {
			signout();
			Router.push('/joinus');
			client.cache.reset().then(() => {});
		} else {
			Router.push(`/billing`);
		}
	};

	const formattedChats = newMessages => {
		return newMessages.filter(msg => msg.messages).map(chatObj => {
			let len = chatObj.messages.length - 1;
			const { messages } = chatObj;
			return {
				from: messages[len].from.firstName,
				text: messages[len].text,
				img: messages[len].from.imageThumbnail,
			};
		});
	};
	return (
		<User>
			{({ data: { currentUser }, client }) => {
				let chats = formattedChats(newMessages); // these are formatted to the from, message, img object I told you about
				console.log(chats);
				return (
					<Header
						color={color}
						brand={Logo}
						fixed={color === 'transparent'}
						changeColorOnScroll={
							color === 'transparent' && {
								height: 300,
								color: 'warning',
							}
						}
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
									<CustomDropdown
										left
										caret={false}
										hoverColor='dark'
										dropdownHeader={
											newMessages.length &&
											newMessages.length + ' new messages!'
										}
										buttonText={
											<Badge badgeContent={newMessages.length} color='error'>
												<Mail />
											</Badge>
										}
										buttonProps={{
											className:
												classes.navLink + ' ' + classes.imageDropdownButton,
											color: 'transparent',
										}}
										dropdownList={
											chats ? (
												chats.map(chat => (
													<div style={{ display: 'flex' }}>
														<img
															src={chat.img}
															style={{
																width: '40px',
																height: '40px',
																borderRadius: '50%',
															}}
														/>
														<div>
															<div>{chat.from}</div>
															<div>{chat.text}</div>
														</div>
													</div>
												))
											) : (
												[]
											)
										}
									/>
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
				);
			}}
		</User>
	);
};

export default withStyles(navbarsStyle)(Nav);
