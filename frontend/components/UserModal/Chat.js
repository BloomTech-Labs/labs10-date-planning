import React, { useState, useEffect, useRef } from 'react';
import NProgress from 'nprogress';
import moment from 'moment';

import withStyles from '@material-ui/core/styles/withStyles';
import { Send } from '@material-ui/icons';

import { useQuery } from 'react-apollo-hooks';
import { useMutation } from '../Mutations/useMutation';

import { SEND_MESSAGE_MUTATION } from '../Mutations/sendMessage';
import { GET_CONVERSATION_QUERY } from '../Queries/getConvo';
import { UDPATE_SEEN_MSG_MUTATION } from '../Mutations/updateSeenMessage';

import CustomInput from '../../styledComponents/CustomInput/CustomInput.jsx';
import Media from '../../styledComponents/Media/Media.jsx';
import Button from '../../styledComponents/CustomButtons/Button';

import styles from '../../static/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx';

const Chat = ({ classes, id, currentUser }) => {
	const [ message, setMessage ] = useState('');
	const [ newMsgs, setNewMsgs ] = useState([]);
	const [ updateSeen ] = useMutation(UDPATE_SEEN_MSG_MUTATION);
	const [ sendMessage ] = useMutation(SEND_MESSAGE_MUTATION, {
		variables: { id, message },
		onCompleted: () => {
			NProgress.done();
			setMessage('');
		},
		onError: () => NProgress.done(),
	});
	const { data } = useQuery(GET_CONVERSATION_QUERY, {
		variables: { id },
	});

	const msgRef = useRef(null);

	useEffect(
		() => {
			if (data.getConversation) {
				let unseen = data.getConversation.messages.filter(
					msg => msg.from.id === id && !msg.seen,
				);
				if (unseen.length) {
					setNewMsgs(unseen);
					updateSeen({
						variables: {
							chatId: data.getConversation.id,
						},
					});
				}
			}
		},
		[ data ],
	);

	useEffect(
		() => {
			if (msgRef.current) {
				msgRef.current.scrollTop = msgRef.current.scrollHeight;
			}
		},
		[ msgRef.current ],
	);

	if (data.getConversation) {
		let messages = data.getConversation.messages;
		let user = data.getConversation.users.find(usr => usr.id !== id);
		let match = data.getConversation.users.find(usr => usr.id === id);

		return (
			<div className={classes.chatBorder}>
				<div ref={msgRef} className={classes.chat}>
					{messages.map(msg => {
						let fromMatch = msg.from.id === id;
						let unseen = newMsgs.find(m => m.id === msg.id);
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
												<span style={{ color: 'red' }}>new</span>
											) : null}
										</small>
									</span>
								}
								body={
									<span>
										<p>{msg.text}</p>
									</span>
								}
							/>
						);
					})}
				</div>
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
								}}
							>
								<Send />
							</Button>
						}
					/>
				</div>
			</div>
		);
	} else
		return (
			<div>
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
							className={classes.floatRight}
							onClick={() => {
								NProgress.start();
								sendMessage();
							}}
						>
							<Send />
						</Button>
					}
				/>
			</div>
		);
};

export default withStyles(styles)(Chat);
