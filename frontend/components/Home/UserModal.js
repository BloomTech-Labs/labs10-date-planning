import React, { useState, useEffect, Fragment } from 'react';
import { withApollo, Mutation, Query } from 'react-apollo';
import moment from 'moment';
import NProgress from 'nprogress';
import Router, { withRouter } from 'next/router';

import { adopt } from 'react-adopt';
import { State, Map, Value, Toggle } from 'react-powerplug';
//MUI
import withStyles from '@material-ui/core/styles/withStyles';
import { DialogTitle, Dialog, DialogContent, InputAdornment, IconButton } from '@material-ui/core';
import {
	BookmarkBorder,
	Close,
	Send,
	Favorite,
	FavoriteBorder,
	NotInterested,
} from '@material-ui/icons';
//Q&M
import User, { CURRENT_USER_QUERY } from '../Queries/User';
import { EVENT_QUERY } from '../Queries/Event';
import { GET_CONVERSATION_QUERY } from '../Queries/getConvo';
import { USER_QUERY } from '../Queries/OtherUser';
import { ADD_EVENT_MUTATION } from '../Mutations/addEvent';
import { CREATE_CHAT_MUTATION } from '../Mutations/createChat';
import { SEND_MESSAGE_MUTATION } from '../Mutations/sendMessage';
import {
	UPDATE_USER_MUTATION,
	LIKE_USER_MUTATION,
	UNLIKE_USER_MUTATION,
	UPDATE_BLOCKS_MUTATION,
} from '../Mutations/updateUser';
//Components
import InfoModal from './InfoModal';
//StyledComponents
import Button from '../../styledComponents/CustomButtons/Button';
import CustomInput from '../../styledComponents/CustomInput/CustomInput.jsx';
import Media from '../../styledComponents/Media/Media.jsx';
//styles
import styles from '../../static/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx';
import '../../styles/Home/EventModal.scss';
//utils
import getAge from '../../utils/getAge';

const Composed = adopt({
	user: ({ render }) => <Query query={CURRENT_USER_QUERY}>{render}</Query>,
	id: ({ matchId, render }) => <Value initial={matchId}>{render}</Value>,
	potentialMatch: ({ id, render }) => (
		<Query query={USER_QUERY} variables={{ id: id.value }}>
			{render}
		</Query>
	),
	convo: ({ id, render }) => (
		<Query query={GET_CONVERSATION_QUERY} variables={{ id: id.value }}>
			{render}
		</Query>
	),
	createChat: ({ id, render }) => (
		<Mutation
			mutation={CREATE_CHAT_MUTATION}
			refetchQueries={[ { query: GET_CONVERSATION_QUERY, variables: { id: id.value } } ]}
			onCompleted={() => NProgress.done()}
			onError={() => NProgress.done()}
		>
			{(mutation, result) => render({ mutation, result })}
		</Mutation>
	),
	sendMessage: ({ id, render }) => (
		<Mutation
			mutation={SEND_MESSAGE_MUTATION}
			refetchQueries={[ { query: GET_CONVERSATION_QUERY, variables: { id: id.value } } ]}
			awaitRefetchQueries
			onCompleted={() => NProgress.done()}
			onError={() => NProgress.done()}
		>
			{(mutation, result) => render({ mutation, result })}
		</Mutation>
	),
	like: ({ id, render }) => (
		<Mutation
			mutation={LIKE_USER_MUTATION}
			variables={{ like: id.value }}
			onCompleted={() => NProgress.done()}
			onError={() => NProgress.done()}
		>
			{render}
		</Mutation>
	),
	unlike: ({ id, render }) => (
		<Mutation
			mutation={UNLIKE_USER_MUTATION}
			variables={{ like: id.value }}
			onCompleted={() => NProgress.done()}
			onError={() => NProgress.done()}
		>
			{render}
		</Mutation>
	),
	block: ({ id, render }) => (
		<Mutation
			mutation={UPDATE_BLOCKS_MUTATION}
			variables={{ block: id.value }}
			onCompleted={() => NProgress.done()}
			onError={() => NProgress.done()}
		>
			{render}
		</Mutation>
	),
});

const EventModal = ({ classes, user, router }) => {
	const [ message, setMessage ] = useState('');
	console.log(router);
	//let isLiked =
	

	return (
		<Composed matchId={user}>
			{({
				user: { data: { currentUser } },
				createChat,
				sendMessage,
				id,
				convo,
				like,
				unlike,
				block,
				potentialMatch,
			}) => {
				let match = potentialMatch.data ? potentialMatch.data.user : null;
				let isLiked = currentUser.liked.find(user => user.id === id.value);
				if (!match) return <div />;
				else {
					NProgress.done();
					return (
						<Dialog
							classes={{
								root: classes.modalRoot,
								paper: classes.modalLarge,
							}}
							open={user}
							// TransitionComponent={Transition}
							//keepMounted
							scroll='body'
							onClose={() => showModal(false)}
							aria-labelledby='notice-modal-slide-title'
							aria-describedby='notice-modal-slide-description'
							//style={{ height: '700px' }}
						>
							<DialogTitle
								id='notice-modal-slide-title'
								disableTypography
								className={`${classes.modalHeader} ${classes.userModalHeader}`}
							>
								{' '}
								<Button
									simple
									className={classes.modalCloseButton}
									key='close'
									aria-label='Close'
									onClick={e => {
										e.stopPropagation();
										Router.push(
											router.pathname,
											router.pathname,
											{ shallow: true },
											{ scroll: false },
										);
									}}
								>
									{' '}
									<Close
										style={{ color: '#fafafa' }}
										className={classes.modalClose}
									/>
								</Button>
								<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', left: '50px'}}>
									<h4
										style={{
											fontWeight: 700,
											color: '#fafafa',
											marginRight: '10px',
											fontSize: '40px'
										}}
										className={classes.modalTitle}
									>
										{match.firstName.toUpperCase()} | {getAge(match.dob)}
									</h4>
									<IconButton className={classes.liked} onClick={() => (isLiked ? unlike() : like())}>
										{isLiked ? <Favorite /> : <FavoriteBorder />}
									</IconButton>
									<IconButton className={classes.blocked} onClick={() => block()}>
										<NotInterested />
									</IconButton>
								</div>
							</DialogTitle>
							<DialogContent
								style={{ zIndex: 3, display: 'flex' }}
								id='notice-modal-slide-description'
								classes={{ root: 'dialogContent' }}
								className={classes.modalBody}
							>
								<div>
									<img
										style={{
											margin: '20px 0',
											borderRadius: '6px',
											overflow: 'hidden',

											height: '452px',
										}}
										src={match.imageLarge}
									/>
									{match.biography && (
										<div className='gradient-box'>
											<div className='date'>{match.biography}</div>
										</div>
									)}
								</div>
								<div>
									<div
										style={{
											height: '452px',

											overflowY: 'scroll',
											margin: '20px 0',
										}}
									>
										{convo.data.getConversation &&
											convo.data.getConversation.messages &&
											convo.data.getConversation.messages.map(message => (
												<Media
													currentUser={message.from.id === currentUser.id}
													key={message.id}
													avatar={message.from.imageThumbnail}
													title={
														<span>
															{message.from.firstName}{' '}
															<small>· {moment(message.createdAt).fromNow()}</small>
														</span>
													}
													body={
														<span>
															<p>{message.text}</p>
														</span>
													}
												/>
											))}
									</div>
									<div>
										<Media
											avatar={currentUser.imageLarge}
											body={
												<CustomInput
													id='logged'
													formControlProps={{
														fullWidth: true,
													}}
													inputProps={{
														multiline: true,
														rows: 6,
														placeholder:
															`Find out what ${match.firstName}'s up for!`,
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
														convo.data.getConversation
															? await sendMessage.mutation({
																	variables: {
																		id: id.value,
																		message: message,
																	},
																})
															: await createChat.mutation({
																	variables: {
																		id: id.value,
																		message: message,
																	},
																});
														setMessage('');
													}}
												>
													<Send />
												</Button>
											}
										/>
									</div>
								</div>
							</DialogContent>
						</Dialog>
					);
				}
			}}
		</Composed>
	);
};

export default withRouter(withApollo(withStyles(styles)(EventModal)));

//const [ event, setEvent ] = useState(undefined);
//const [ isShowing, setIsShowing ] = useState(false);
// useEffect(
// 	() => {
// 		if (modal === true) {
// 			NProgress.start();
// 			getEvent();
// 		} else {
// 			setEvent(undefined);
// 		}
// 	},
// 	[ modal ],
// );

// useEffect(
// 	() => {
// 		if (event) {
// 			setIsShowing(true);
// 		}
// 	},
// 	[ event ],
// );

// useEffect(
// 	() => {
// 		if (!isShowing) {
// 			showModal(false);
// 		} else {
// 			NProgress.done();
// 		}
// 	},
// 	[ isShowing ],
// );

// const getEvent = async () => {
// 	let { data } = await client.query({
// 		query: EVENT_QUERY,
// 		variables: { id },
// 	});
// 	console.log(data.getEvent);
// 	setEvent(data.getEvent);
// };

//const [ messageModal, showMessageModal ] = useState({});

// const handleClick = async (e, addEvent, user) => {
// 	console.log(event);
// 	e.stopPropagation();
// 	if (user.permissions === 'FREE') {
// 		if (user.events.length === 5) {
// 			showMessageModal({
// 				error: 'You have reached your maximum limit for your free account.',
// 			});
// 		} else {
// 			showMessageModal({
// 				warning: `You have ${5 - user.events.length} remaining.`,
// 			});
// 		}
// 	} else {
// 		showMessageModal({ message: true });
// 	}
// 	addEvent();
// };
