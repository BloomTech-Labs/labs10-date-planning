import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from '../../static/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx';

const ChatList = ({ userChats, currentUser, handleSelectMessage, classes }) => {
	return (
		<div style={{ padding: '20px' }}>
			{userChats &&
				userChats.map(chat => {
					let match = chat.users.find(usr => usr.id !== currentUser.id);
					console.log(match);
					let age = new Date(Date.now()).getFullYear() - match.dob.split('-')[0] - 1;
					console.log(age);
					return (
						<div
							key={chat.id}
							onClick={() => handleSelectMessage(chat.id)}
							style={{ display: 'flex', marginBottom: '20px' }}
						>
							<img
								src={match.img.find(img => img.default).img_url}
								style={{
									width: '90px',
									height: '90px',
									borderRadius: '6px',
									marginRight: '15px',
								}}
							/>

							<div style={{ wordBreak: 'break-word' }}>
								<h4 className={classes.title}>{match.firstName}</h4>
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
