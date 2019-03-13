import React, { useState, useEffect, useRef } from 'react';
import NProgress from 'nprogress';
import moment from 'moment';
import gql from 'graphql-tag';

import withStyles from '@material-ui/core/styles/withStyles';
import { Send } from '@material-ui/icons';

import { Mutation } from 'react-apollo';
import { useMutation } from 'react-apollo-hooks';

// import { SEND_MESSAGE_MUTATION } from '../Mutations/sendMessage';

import CustomInput from '../../styledComponents/CustomInput/CustomInput.jsx';
import Media from '../../styledComponents/Media/Media.jsx';
import Button from '../../styledComponents/CustomButtons/Button';

import styles from '../../static/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx';

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

const Chat = ({ classes, data, id, currentUser, subscribeToNewMessages }) => {
	const [ message, setMessage ] = useState('');
	const markAllAsSeen = useMutation(MARK_SEEN);

	useEffect(() => {
		subscribeToNewMessages()
	}, [])

	useEffect(() => {
		const unSeen =
			data &&
			data.getConversation && data.getConversation.messages.filter(msg => !msg.seen && msg.from.id !== currentUser.id);

		if (unSeen && unSeen.length > 0) {
			markAllAsSeen({
				variables: {
					chatId: data.getConversation.id,
				},
			});
		}
	});

	if (data.getConversation) {
		let messages = data.getConversation.messages;
		let user = data.getConversation.users.find(usr => usr.id !== id);
		let match = data.getConversation.users.find(usr => usr.id === id);

		return (
			<div className={classes.chatBorder}>
				<div className={classes.chat}>
					{messages.map(msg => {
						let fromMatch = msg.from.id === id;
						let unseen = !msg.seen;
						let img = msg.from.img.find(img => img.default).img_url;
						return (
							<Media
								currentUser={!fromMatch}
								key={msg.id}
								avatar={img}
								title={
									<span>
										{msg.from.firstName}
										<small
											style={{
												fontWeight: unseen && 'bold',
											}}
										>
											· {moment(msg.createdAt).fromNow()}
											{unseen ? (
												<span style={{ color: 'red', marginLeft: '6px' }}>new</span>
											) : null}
										</small>
									</span>
								}
								body={
									<span>
										<p style={{wordBreak:'break-word'}}>{msg.text}</p>
									</span>
								}
							/>
						);
					})}
				</div>
				<Mutation
					mutation={SEND_MESSAGE_MUTATION}
					variables={{ id, message }}
					onCompleted={() => NProgress.done()}
					onError={() => NProgress.done()}
				>
					{
						sendMessage => (
							<div>
								<Media
									avatar={user.img.find(i => i.default).img_url}
									currentUser
									body={
										<CustomInput
											id='logged'
											formControlProps={{
												fullWidth: true,
											}}
											inputProps={{
												multiline: true,
												rows: 6,
												placeholder: `Find out what ${match.firstName}'s up for!`,
												value: message,
												onChange: e => setMessage(e.target.value),
											}}
										/>
									}
									footer={
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
									}
								/>
							</div>
						)
					}
				</Mutation>
			</div>
		);
	} else
		return (
			<Mutation
				mutation={SEND_MESSAGE_MUTATION}
				variables={{ id, message }}
				onCompleted={() => NProgress.done()}
				onError={() => NProgress.done()}
			>
				{
					sendMessage => (
						<div className={classes.chatButton}>
							<Media
								avatar={currentUser.img.find(i => i.default).img_url}
								currentUser
								body={
									<CustomInput
										id='logged'
										formControlProps={{
											fullWidth: true,
										}}
										inputProps={{
											multiline: true,
											rows: 6,
											placeholder: `Find out what this user is up for!`,
											value: message,
											onChange: e => setMessage(e.target.value),
										}}
									/>
								}
								footer={
									<Button
										color='primary'
										justIcon
										onClick={() => {
											NProgress.start();
											sendMessage();
											setMessage('');
										}}
									>
										<Send />
									</Button>
								}
							/>
						</div>
					)
				}
			</Mutation>
		);
};

export default withStyles(styles)(Chat);
