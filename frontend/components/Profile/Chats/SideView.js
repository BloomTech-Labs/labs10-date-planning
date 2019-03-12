import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import moment from 'moment';
import { Badge, Divider } from '@material-ui/core';
import styles from '../../../static/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx';

const Chat = ({ chat, setChat, selectedChat, classes }) => {
	const isSelected = selectedChat ? chat.id === selectedChat.id : false;
	return (
		<div
			onClick={() => setChat(chat.id)}
			style={{
				display: 'flex',
				marginBottom: '20px',
				padding: '5px 10px',
				borderRadius: '2px',
				backgroundImage: isSelected
					? 'linear-gradient(to top, #b893b3, #bd9db8, #c1a6be, #c6b0c3, #cabac8)'
					: 'none',
			}}
		>
			<Badge badgeContent={chat.newMsgs} color='error'>
				<img
					src={chat.img}
					style={{
						width: '90px',
						height: '90px',
						borderRadius: '6px',
					}}
				/>
			</Badge>
			<div
				style={{
					marginLeft: '15px',
					wordBreak: 'break-word',
					width: '200px',
				}}
			>
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<h4 style={{ margin: '0', color: '#fafafa' }} className={classes.title}>
						{chat.from}
					</h4>
					<small>{moment(chat.time).fromNow()}</small>
				</div>
				<p
					style={{
						maxHeight: '50px',
						overflow: 'hidden',
						textOverflow: 'ellipsis',
						color: '#fafafa',
					}}
				>
					{chat.text}
				</p>
			</div>
		</div>
	);
};

export default withStyles(styles)(Chat);
