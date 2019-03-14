import React, { useEffect, useState, Fragment, useRef } from 'react';
import NProgress from 'nprogress';
import { Mutation } from 'react-apollo';
import { useMutation } from 'react-apollo-hooks';
import moment from 'moment';
import gql from 'graphql-tag';
import { withStyles } from '@material-ui/core';
import styles from '../../../static/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx';
import Button from '../../../styledComponents/CustomButtons/Button';
import CustomInput from '../../../styledComponents/CustomInput/CustomInput.jsx';
import Media from '../../../styledComponents/Media/Media.jsx';
import { Send } from '@material-ui/icons';
import scrollbar from '../../../static/jss/ScrollbarStyles';

const SEND_MESSAGE_MUTATION = gql`
	mutation SEND_MESSAGE_MUTATION($id: String!, $message: String!) {
		sendMessage(id: $id, message: $message) {
			id
			users {
				id
				firstName
				img {
					id
					img_url
					default
				}
			}
			messages {
				id
				text
				seen
				createdAt
				from {
					id
					firstName
					img {
						id
						img_url
						default
					}
				}
				updatedAt
			}
		}
	}
`;

const MARK_SEEN = gql`
	mutation MARK_SEEN($chatId: String!) {
		markAllAsSeen(chatId: $chatId) {
			id
		}
	}
`;

const Chat = ({ chat, currentUser, classes }) => {
	const [ message, setMessage ] = useState('');
	const msgRef = useRef(null);
	const markAllAsSeen = useMutation(MARK_SEEN);

	useEffect(() => {
		const unSeen =
			chat && chat.messages.filter(msg => !msg.seen && msg.from.id !== currentUser.id);

		if (unSeen && unSeen.length > 0) {
			markAllAsSeen({
				variables: {
					chatId: chat.id,
				},
			});
		}
	});

	useEffect(
		() => {
			if (msgRef.current) {
				msgRef.current.scrollTop = msgRef.current.scrollHeight;
			}
		},
		[ chat ],
	);

	let friend;
	if (chat) {
		friend = chat.users.find(user => user.id !== currentUser.id);
	}

	return (
		<div
			style={{
				flexGrow: 1,
				height: '100%',
				overflow: 'hidden',
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<div className={classes.messageList} ref={msgRef}>
				{chat &&
					chat.messages.map(msg => {
						console.log(msg);
						const img = msg.from.img.find(x => x.default).img_url;
						return (
							<Media
								currentUser={currentUser && msg.from.id === currentUser.id}
								key={msg.id}
								avatar={img}
								title={
									<span style={{ color: '#fafafa' }}>
										{msg.from.firstName}{' '}
										<small style={{ fontSize: '12px' }}>
											· {moment(msg.createdAt).fromNow()}
										</small>
									</span>
								}
								body={
									<span
										style={{
											maxWidth: '300px',
											wordBreak: 'break-word',
										}}
									>
										<p style={{ color: '#fafafa', fontSize: '14px' }}>
											{msg.text}
										</p>
										{currentUser.permissions !== 'FREE' && msg.seen ? (
											<small>
												<span style={{ marginRight: '2px' }}>seen</span>
												{moment(msg.UpdatedAt).format('M/D/YY h:mm a')}
											</small>
										) : null}
									</span>
								}
							/>
						);
					})}
			</div>
			{chat && (
				<Mutation
					mutation={SEND_MESSAGE_MUTATION}
					variables={{ id: friend.id, message }}
					onCompleted={() => NProgress.done()}
					onError={() => NProgress.done()}
				>
					{sendMessage => (
						<div className={classes.expandedChat}>
							<CustomInput
								id='logged'
								formControlProps={{
									fullWidth: true,
								}}
								inputProps={{
									multiline: true,
									rows: 6,
									placeholder: `Respond to ${friend.firstName}`,
									value: message,
									onChange: e => setMessage(e.target.value),
									style: { color: '#fafafa', width: '80%' },
								}}
							/>

							<Button
								color='primary'
								justIcon
								className={classes.floatRight}
								onClick={() => {
									NProgress.start();
									sendMessage();

									setMessage('');
								}}
							>
								<Send />
							</Button>
						</div>
					)}
				</Mutation>
			)}
		</div>
	);
};

export default withStyles(styles)(Chat);
