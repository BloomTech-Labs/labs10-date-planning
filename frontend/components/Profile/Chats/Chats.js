import React, { useEffect, useState } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import LikedBy from '../LikedBy';
import { Paper, Grid, Typography } from '@material-ui/core';
import GridContainer from '../../../styledComponents/Grid/GridContainer';
import GridItem from '../../../styledComponents/Grid/GridItem';
import profileStandIn from '../../../static/img/placeholder.jpg';
import styles from '../../../static/jss/material-kit-pro-react/views/componentsSections/basicsStyle.jsx';
import ExpandedChat from './ExpandedChat';
import SmallChat from './SideView';

const Chats = ({ subscribeToNewChats, subscribetoNewMessages, data, currentUser, classes }) => {
	const [ chatId, setChatId ] = useState(undefined);
	const [ newChatUser, setNewChatUser ] = useState(undefined);
	console.log(data);
	useEffect(() => {
		subscribeToNewChats();
		subscribetoNewMessages();
	}, []);

	const handleSelectUser = usr => {
		console.log(usr);
		let chat;
		if (data.getUserChats && data.getUserChats.length) {
			chat = data.getUserChats.find(chat => chat.users.some(x => x.id === usr.id));
		}
		if (chat) setChatId(chat.id);
		else {
			setChatId(undefined);
			setNewChatUser(usr);
		}
	};

	const formattedChats = userChats => {
		return userChats
			.filter(msg => msg.messages)
			.map(chatObj => {
				console.log(chatObj);
				let newMsgs = chatObj.messages.filter(
					msg => msg.from.id !== currentUser.id && !msg.seen,
				);
				let len = chatObj.messages.length - 1;
				const { messages, users } = chatObj;
				let [ usr ] = users.filter(usr => usr.id !== currentUser.id);
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
					newMsgs: newMsgs.length,
				};
			})
			.sort((a, b) => {
				let dateA = new Date(a.time);
				let dateB = new Date(b.time);
				return dateB - dateA;
			});
	};

	const selectedChat = !data.getUserChats
		? null
		: data.getUserChats.find(chat => chat.id === chatId);

	return (
		<div className={classes.container} style={{ padding: '30px 0' }}>
			<GridContainer style={{ height: '100%', flexDirection: 'column', width: '100%' }}>
				<LikedBy user={currentUser} setSeleccted={handleSelectUser} />
				<GridContainer
					style={{ height: 'calc(100vh - 300px)', overflow: 'scroll', width: '100%' }}
				>
					<GridItem sm={12} md={4} lg={4} style={{ height: '100%' }}>
						<Paper
							style={{
								height: '100%',
								minWidth: '250px',
								backgroundColor: '#1f1e1e',
								backgroundImage:
									'url("https://www.transparenttextures.com/theme/images/transparent.png")',
							}}
							className={classes.paper}
						>
							<Typography
								variant='h6'
								gutterBottom
								style={{
									textAlign: 'center',
									padding: '7px',
									borderTopLeftRadius: '6px',
									color: 'white',
								}}
							>
								{' '}
								<div style={{ margin: '15px' }} className={classes.title}>
									Slidin' in to your DMs
								</div>
							</Typography>
							<div
								style={{
									padding: '20px 5px 20px',
									maxHeight: '100%',
									overflow: 'scroll',
								}}
							>
								{data.getUserChats &&
									formattedChats(data.getUserChats).map((chat, i) => (
										<div
											key={chat.id}
											onClick={() => {
												setChatId(chat.id);
											}}
										>
											<SmallChat
												chat={chat}
												setChat={setChatId}
												selectedChat={selectedChat}
											/>
										</div>
									))}
							</div>
						</Paper>
					</GridItem>
					<GridItem sm={12} md={8} lg={8} style={{ maxHeight: 'calc(100vh - 300px)' }}>
						<Paper
							className={classes.paper2}
							style={{
								height: '100%',
								backgroundColor: '#1f1e1e',
								backgroundImage:
									'url("https://www.transparenttextures.com/theme/images/transparent.png")',
							}}
						>
							{/* <Typography
                variant="div"
                gutterBottom
                style={{
                  textAlign: "center",
                  padding: "7px",
                  borderTopLeftRadius: "6px",
                  color: "white"
                }}
              >
                <h4 style={{ margin: "15px" }} className={classes.title}>
                  Select a user to the left.
                </h4>
              </Typography> */}
							<ExpandedChat chat={selectedChat} currentUser={currentUser} />
						</Paper>
					</GridItem>
				</GridContainer>
			</GridContainer>
		</div>
	);
};

export default withStyles(styles)(Chats);
