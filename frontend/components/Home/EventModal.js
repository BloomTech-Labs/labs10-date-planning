import React, { useState, useEffect, Fragment } from 'react';
import { withApollo, Mutation, Query } from 'react-apollo';
import moment from 'moment';
import NProgress from 'nprogress';

import { adopt } from 'react-adopt';
import { State, Map, Value, Toggle } from 'react-powerplug';
//MUI
import withStyles from '@material-ui/core/styles/withStyles';
import { DialogTitle, Dialog, DialogContent, InputAdornment } from '@material-ui/core';
import { BookmarkBorder, Close, Send } from '@material-ui/icons';
//Q&M
import User, { CURRENT_USER_QUERY } from '../Queries/User';
import { EVENT_QUERY } from '../Queries/Event';
import { GET_CONVERSATION_QUERY } from '../Queries/getConvo';

import { ADD_EVENT_MUTATION } from '../Mutations/addEvent';
import { CREATE_CHAT_MUTATION } from '../Mutations/createChat';
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
	convo: ({ id, render }) => (
		<Query query={GET_CONVERSATION_QUERY} variables={{ id: id.value }}>
			{render}
		</Query>
	),
	createChat: ({ render }) => (
		<Mutation
			mutation={CREATE_CHAT_MUTATION}
			refetchQueries={[ { query: GET_CONVERSATION_QUERY } ]}
			onCompleted={() => NProgress.done()}
			onError={() => NProgress.done()}
		>
			{(mutation, result) => render({ mutation, result })}
		</Mutation>
	),
});

const EventModal = ({ modal, showModal, classes, potentialMatch }) => {
	const [ message, setMessage ] = useState('');
	const modalHeader = {
		// backgroundColor: '#81d6e3',
		backgroundImage: 'linear-gradient(to top, #8ad2ff, #94d5fd, #9fd8fb, #a8daf9, #b2ddf7)',
		borderTopLeftRadius: '6px',
		borderTopRightRadius: '6px',
		paddingBottom: '15px',
		color: '#fafafa',
	};
	if (!modal) return <div />;
	else
		return (
			<Composed matchId={potentialMatch.id}>
				{({ user: { data: { currentUser } }, createChat, id, convo }) => {
					console.log(createChat.result, id, convo);
					return (
						<Dialog
							classes={{
								root: classes.modalRoot,
								paper: classes.modal,
							}}
							open={modal}
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
								className={classes.modalHeader}
								style={modalHeader}
							>
								{' '}
								<Button
									simple
									className={classes.modalCloseButton}
									key='close'
									aria-label='Close'
									onClick={e => {
										e.stopPropagation();
										showModal(false);
									}}
								>
									{' '}
									<Close
										style={{ color: '#fafafa' }}
										className={classes.modalClose}
									/>
								</Button>
								<h4
									style={{
										fontWeight: 700,
									}}
									className={classes.modalTitle}
								>
									{potentialMatch.firstName} | {getAge(potentialMatch.dob)}
								</h4>
							</DialogTitle>
							<DialogContent
								style={{ zIndex: 3 }}
								id='notice-modal-slide-description'
								classes={{ root: 'dialogContent' }}
								className={classes.modalBody}
							>
								<img
									style={{
										margin: '20px 0',
										borderRadius: '6px',
										overflow: 'hidden',
										width: '100%',
										height: '452px',
									}}
									src={potentialMatch.imageLarge}
								/>
								{potentialMatch.biography && (
									<div className='gradient-box'>
										<div className='date'>{potentialMatch.biography}</div>
									</div>
								)}
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
													<small>
														· {moment(message.createdAt).fromNow()}
													</small>
												</span>
											}
											body={
												<span>
													<p>{message.text}</p>
												</span>
											}
										/>
									))}
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
														' Write some nice stuff or nothing...',
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
													createChat.mutation({
														variables: {
															id: id.value,
															message: message,
														},
													});
												}}
											>
												<Send />
											</Button>
										}
									/>
									{/* <CustomInput
									formControlProps={{
										fullWidth: true,
									}}
									inputProps={{
										placeholder: 'Send a message?',
										value: message,
										onChange: e => setMessage(e.target.value),
										endAdornment: (
											<InputAdornment position='end'>
												<Button justIcon round disabled={!message.length}>
													<Send />
												</Button>
											</InputAdornment>
										),
									}}
								/> */}
								</div>
							</DialogContent>
						</Dialog>
					);
				}}
			</Composed>
		);
};

export default withApollo(withStyles(styles)(EventModal));

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
