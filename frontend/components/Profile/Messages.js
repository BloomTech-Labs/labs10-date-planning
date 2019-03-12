import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import NProgress from 'nprogress';
import { useQuery } from 'react-apollo-hooks';
import useInterval from '@rooks/use-interval';
import { withRouter } from 'next/router';

import { Paper, Grid, Typography } from '@material-ui/core';

import withStyles from '@material-ui/core/styles/withStyles';
import LikedBy from './LikedBy';
import User, { CURRENT_USER_QUERY } from '../Queries/User';
import { ALL_CHATS_QUERY } from '../Queries/AllChats';
import GridContainer from '../../styledComponents/Grid/GridContainer';
import GridItem from '../../styledComponents/Grid/GridItem';
import ChatList from './ChatList';
import MessageList from './MessageList';
import profileStandIn from '../../static/img/placeholder.jpg';
import styles from '../../static/jss/material-kit-pro-react/views/componentsSections/basicsStyle.jsx';
Router.onRouteChangeComplete = () => {
	NProgress.done(true);
};

const Messages = ({ classes, color, router, href, user }) => {
	const [ selectedChatId, setSelectedChatId ] = useState(undefined);

	const { data, loading, refetch } = useQuery(ALL_CHATS_QUERY, {
		pollInterval: 600,
	});

	const handleSelectMessage = chatId => {
		setSelectedChatId(chatId);
	};

	if (!data) return <div>loading</div>;

	const formattedChats = userChats => {
		return userChats.filter(msg => msg.messages).map(chatObj => {
			let len = chatObj.messages.length - 1;
			const { messages, users } = chatObj;
			let [ usr ] = users.filter(usr => usr.id !== user.id);
			let img = usr.img.length ? usr.img.find(img => img.default).img_url : profileStandIn;
			return {
				id: chatObj.id,
				from: usr.firstName,
				fromId: usr.id,
				text: messages[len].text,
				img: img,
				time: messages[len].createdAt,
			};
		});
	};

	const selectedChat =
		selectedChatId && data.getUserChats
			? data.getUserChats.filter(chat => chat.id === selectedChatId)
			: [];
	console.log(selectedChat);
	const chatUser = selectedChat.length
		? selectedChat[0].users.find(usr => usr.id !== user.id)
		: null;
	console.log(chatUser);
	return (
		<div className={classes.container} style={{ padding: '30px 0 50px' }}>
			<GridContainer style={{ height: '100%', flexDirection: 'column' }}>
				<LikedBy user={user} />
				<GridContainer style={{ height: 'calc(100vh - 300px)' }}>
					<GridItem sm={12} md={4} lg={4}>
						<Paper
							style={{ height: '100%', minWidth: '250px' }}
							className={classes.paper}
						>
							<Typography
								variant='h6'
								gutterBottom
								style={{
									backgroundImage:
										'linear-gradient(to right, #b2ddf7, #a8daf9, #9fd8fb, #94d5fd, #8ad2ff)',
									textAlign: 'center',
									padding: '7px',
									borderTopLeftRadius: '6px',
									color: 'white',
								}}
							>
								{' '}
								<h4 style={{ margin: '15px' }} className={classes.title}>
									Slidin' in to your DMs
								</h4>
							</Typography>
							<ChatList
								userChats={formattedChats(data.getUserChats)}
								currentUser={user}
								handleSelectMessage={handleSelectMessage}
							/>
						</Paper>
					</GridItem>
					<GridItem sm={12} md={8} lg={8} style={{ maxHeight: 'calc(100vh - 300px)' }}>
						<Paper className={classes.paper} style={{ height: '100%' }}>
							<Typography
								variant='h6'
								gutterBottom
								style={{
									backgroundImage:
										'linear-gradient(to right, #b2ddf7, #a8daf9, #9fd8fb, #94d5fd, #8ad2ff)',
									textAlign: 'center',
									padding: '7px',
									borderTopLeftRadius: '6px',
									color: 'white',
								}}
							>
								{!chatUser ? (
									<h4 style={{ margin: '15px' }} className={classes.title}>
										Select a user to the left.
									</h4>
								) : (
									<span style={{ display: 'flex', alignItems: 'center' }}>
										<img
											src={chatUser.img.find(x => x.default).img_url}
											style={{ height: '65px', borderRadius: '6px' }}
										/>
										<h3 style={{ margin: '0 10px' }} className={classes.title}>
											{chatUser.firstName}
										</h3>
									</span>
								)}
							</Typography>
							<MessageList
								selectedChat={selectedChat}
								currentUser={user}
								selectedChatId={selectedChatId}
							/>
						</Paper>
					</GridItem>
				</GridContainer>
			</GridContainer>
			{/* </Paper> */}
		</div>
	);
};

export default withRouter(withStyles(styles)(Messages));
