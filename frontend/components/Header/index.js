import React, { useEffect, useState, Fragment } from 'react';
import Router from 'next/router';
import gql from 'graphql-tag';
import { Mutation, Query } from 'react-apollo';
import NProgress from 'nprogress';
import moment from 'moment';
import { useQuery } from 'react-apollo-hooks';
import { withRouter } from 'next/router';

//MUI
import withStyles from '@material-ui/core/styles/withStyles';
import { List, ListItem, Badge, Divider } from '@material-ui/core';
import { AccountCircle, Explore, Mail, LocationCityOutlined } from '@material-ui/icons';
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
import profileStandIn from '../../static/img/placeholder.jpg';

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
const Nav = ({ classes, color, router, href, currentUser }) => {
	const { data, loading, refetch } = useQuery(ALL_CHATS_QUERY, {
		pollInterval: 600,
	});

	const handleClick = (e, signout, client) => {
		if (e === 'Sign out') {
			signout();

			client.cache.reset().then(() => {
				Router.push('/joinus');
			});
		} else {
			Router.push(`/billing`);
		}
	};

	const formattedChats = (newMessages, user) => {
		return newMessages
			.filter(msg => msg.messages)
			.map(chatObj => {
				let len = chatObj.messages.length - 1;
				const { messages, users } = chatObj;
				let [ usr ] = users.filter(usr => usr.id !== user.id);
				let img = usr.img.length
					? usr.img.find(img => img.default).img_url
					: profileStandIn;
				return {
					id: chatObj.id,
					from: usr.firstName,
					fromId: usr.id,
					text: messages[len].text,
					img: img,
					time: messages[len].createdAt,
				};
			})
			.sort((a, b) => {
				let dateA = new Date(a.time);
				let dateB = new Date(b.time);
				return dateB - dateA;
			});
	};

	const newMessageCount = (newMessages, user) => {
		return newMessages.reduce((count, mess) => {
			let newcount = mess.messages.filter(msg => !msg.seen && msg.from.id !== user.id);

			return [ ...count, ...newcount ];
		}, []);
	};
	let chats = data.getUserChats ? formattedChats(data.getUserChats, currentUser) : [];
	let newMessages = data.getUserChats ? newMessageCount(data.getUserChats, currentUser) : [];
	let profileImage =
		currentUser && currentUser.img.length
			? currentUser.img.find(img => img.default).img_url
			: profileStandIn;
	return (
		<Header
			color={color}
			//brand={Logo}
			fixed={color === 'transparent'}
			changeColorOnScroll={
				color === 'transparent' ? (
					{
						height: 300,
						color: 'warning',
					}
				) : null
			}
			links={
				<List className={classes.list + ' ' + classes.mlAuto}>
					<ListItem className={classes.listItem}>
						<Button
							className={classes.navLink}
							onClick={e => {
								e.preventDefault();
								Router.push('/home');
							}}
							color='transparent'
						>
							{/* <Explore /> Discover */}
							<LocationCityOutlined style={{ height: '30px', width: '30px' }} />
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
							<AccountCircle style={{ height: '30px', width: '30px' }} />
						</Button>
					</ListItem>

					<ListItem style={{ bottom: '5px' }} className={classes.listItem}>
						<CustomDropdown
							className={classes.messageDropdown}
							dropPlacement='bottom-end'
							caret={false}
							messages
							// hoverColor='dark'
							dropdownHeader={
								newMessages.length ? (
									newMessages.length + ' new messages!'
								) : (
									'no new messages.'
								)
							}
							buttonText={
								<Badge badgeContent={newMessages.length} color='error'>
									<Mail
										style={{
											height: '30px',
											width: '30px',
											marginLeft: '10px',
											position: 'relative',
											top: 2,
										}}
									/>
								</Badge>
							}
							buttonProps={{
								className: classes.navLink + ' ' + classes.imageDropdownButton,
								color: 'transparent',
							}}
							dropdownList={
								chats ? (
									chats.map(chat => (
										<Fragment>
											{/* <Divider className={classes.dropdownDividerItem} /> */}
											<div
												onClick={() =>
													Router.push(
														{
															pathname:
																router.pathname === '/'
																	? '/home'
																	: router.pathname,
															query: {
																slug: router.query.slug,
																user: chat.fromId,
															},
														},
														router.query.slug
															? `${router.pathname}/${router.query
																	.slug}/user/${chat.fromId}`
															: router.pathname === '/'
																? `/user/${chat.fromId}`
																: `${router.pathname}/user/${chat.fromId}`,
														{ shallow: true },
														{ scroll: false },
													)}
												style={{
													display: 'flex',
													padding: '5px',
													backgroundColor:
														newMessages.some(
															msg => msg.chat.id === chat.id,
														) &&
														'#fb6f7870',
												}}
											>
												<img
													src={chat.img}
													style={{
														width: '40px',
														height: '40px',
														borderRadius: '50%',
														marginRight: '15px',
														boxShadow:
															'0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
													}}
												/>
												<div style={{ flexGrow: 1 }}>
													<div
														style={{
															display: 'flex',
															justifyContent: 'space-between',
														}}
													>
														<p className={classes.title}>{chat.from}</p>
														<small>{moment(chat.time).fromNow()}</small>
													</div>
													<div
														style={{
															maxWidth: '165px',
															overflow: 'hidden',
															textOverflow: 'ellipsis',
														}}
													>
														{chat.text}
													</div>
												</div>
											</div>
										</Fragment>
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
						{(signout, { called, client }) => {
							{
								/* if (called) Router.push('/joinus'); */
							}
							return (
								<ListItem
									style={{ marginLeft: '10px' }}
									className={classes.listItem}
								>
									<CustomDropdown
										left
										caret={false}
										hoverColor='dark'
										dropdownHeader={currentUser && currentUser.firstName}
										buttonText={
											<img
												src={
													currentUser && profileImage ? (
														profileImage
													) : (
														profileStandIn
													)
												}
												className={classes.img}
												alt='profile'
											/>
										}
										buttonProps={{
											className:
												classes.navLink + ' ' + classes.imageDropdownButton,
											color: 'transparent',
										}}
										dropdownList={[ 'Sign out' ]}
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
};

export default withRouter(withStyles(navbarsStyle)(Nav));
