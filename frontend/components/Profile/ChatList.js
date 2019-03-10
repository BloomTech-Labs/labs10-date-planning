import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import moment from 'moment';
import styles from '../../static/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx';
import { ImageAspectRatio } from '@material-ui/icons';

const ChatList = ({ userChats, currentUser, handleSelectMessage, classes }) => {
	console.log(userChats);
	// const formattedChats = userChats => {
	// 	return userChats.filter(msg => msg.messages).map(chatObj => {
	// 		let len = chatObj.messages.length - 1;
	// 		const { messages, users } = chatObj;
	// 		let [ usr ] = users.filter(usr => usr.id !== currentUser.id);
	// 		let img = usr.img.length ? usr.img.find(img => img.default).img_url : profileStandIn;
	// 		return {
	// 			id: chatObj.id,
	// 			from: usr.firstName,
	// 			fromId: usr.id,
	// 			text: messages[len].text,
	// 			img: img,
	// 			time: messages[len].createdAt,
	// 		};
	// 	});
	// };

	return (
		<div style={{ padding: '20px' }}>
			{userChats &&
				userChats.map(chat => {
					//let match = chat.users.find(usr => usr.id !== currentUser.id);

					//let age = new Date(Date.now()).getFullYear() - match.dob.split('-')[0] - 1;

					return (
						<div
							key={chat.id}
							onClick={() => handleSelectMessage(chat.id)}
							style={{ display: 'flex', marginBottom: '20px' }}
						>
							<img
								src={chat.img}
								style={{
									width: '90px',
									height: '90px',
									borderRadius: '6px',
									marginRight: '15px',
								}}
							/>

							<div
								style={{
									wordBreak: 'break-word',
									width: '200px',
								}}
							>
								<div style={{ display: 'flex', justifyContent: 'space-between' }}>
									<h4 style={{ margin: '0' }} className={classes.title}>
										{chat.from}
									</h4>
									<small>{moment(chat.time).fromNow()}</small>
								</div>
								<p>{chat.text}</p>
							</div>
							{/* <div>
									{`${chat.messages[chat.messages.length - 1].from.id ===
									currentUser.id
										? 'you: '
										: ''} ${chat.messages[chat.messages.length - 1].text}`}
								</div> */}
						</div>
					);
				})}
		</div>
	);
};

export default withStyles(styles)(ChatList);
