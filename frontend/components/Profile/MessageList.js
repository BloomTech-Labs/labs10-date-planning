import React, { useState, useRef, useEffect, Fragment } from 'react';
import { Query, Mutation } from 'react-apollo';
import { SEND_MESSAGE_MUTATION } from '../Mutations/sendMessage';
import { GET_CONVERSATION_QUERY } from '../Queries/getConvo';
import { ALL_CHATS_QUERY } from '../Queries/AllChats';
import moment from 'moment';
import NProgress from 'nprogress';

import Button from '../../styledComponents/CustomButtons/Button';
import CustomInput from '../../styledComponents/CustomInput/CustomInput.jsx';
import Media from '../../styledComponents/Media/Media.jsx';
import { Send } from '@material-ui/icons';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from '../../static/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx';

const MessageList = ({ classes, selectedChat, currentUser, selectedChatId }) => {
	const [ message, setMessage ] = useState('');
	const msgRef = useRef(null);
	let friend;
	if (selectedChat.length > 0) {
		friend = selectedChat[0].users.filter(user => user.id !== currentUser.id)[0];
	}
	useEffect(
		() => {
			if (msgRef.current) {
				msgRef.current.scrollTop = msgRef.current.scrollHeight;
			}
		},
		[ selectedChat ],
	);

	if (selectedChat.length === 0)
		return (
			<div
				style={{
					flexGrow: 1,
					height: '100%',
				}}
			/>
		);
	return (
		<Query query={GET_CONVERSATION_QUERY} variables={{ id: friend.id }}>
			{({ data: { getConversation } }) => {
				if (!getConversation) return <div>loading</div>;
				return (
					<div
						style={{
							flexGrow: 1,
							height: '100%',
							overflow: 'scroll',
							display: 'flex',
							flexDirection: 'column',
						}}
					>
						<div className={classes.messageList} ref={msgRef}>
							{getConversation.messages.map(message => {
								let img = message.from.img.find(img => img.default).img_url;

								return (
									<Media
										currentUser={
											currentUser && message.from.id === currentUser.id
										}
										key={message.id}
										avatar={img}
										title={
											<span>
												{message.from.firstName}{' '}
												<small>
													· {moment(message.createdAt).fromNow()}
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
												<p>{message.text}</p>
											</span>
										}
									/>
								);
							})}
						</div>
						{selectedChatId && (
							<Fragment>
								{' '}
								<Mutation
									mutation={SEND_MESSAGE_MUTATION}
									variables={{ id: friend.id, message: message }}
									onCompleted={() => NProgress.done()}
									onError={() => NProgress.done()}
								>
									{sendMessage => (
										<Media
											style={{
												width: '100%',
												borderTop: '2px solid #bdbdbd',
											}}
											avatar={
												currentUser.img.find(img => img.default).img_url
											}
											body={
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
													}}
												/>
											}
											footer={
												<Button
													color='primary'
													justIcon
													className={classes.floatRight}
													onClick={async () => {
														NProgress.start();
														sendMessage();

														setMessage('');
													}}
												>
													<Send />
												</Button>
											}
										/>
									)}
								</Mutation>
							</Fragment>
						)}
					</div>
				);
			}}
		</Query>
	);
};

export default withStyles(styles)(MessageList);
