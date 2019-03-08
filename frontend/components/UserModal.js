import React, { useState, useEffect, Fragment, useRef } from 'react';
import { withApollo, Mutation, Query } from 'react-apollo';
import moment from 'moment';
import NProgress from 'nprogress';
import Router, { withRouter } from 'next/router';
import Slider from 'react-slick';

import { adopt } from 'react-adopt';
import { State, Map, Value, Toggle } from 'react-powerplug';
//MUI
import withStyles from '@material-ui/core/styles/withStyles';
import {
	DialogTitle,
	Dialog,
	DialogContent,
	InputAdornment,
	IconButton,
	Avatar,
} from '@material-ui/core';
import {
	BookmarkBorder,
	Close,
	Send,
	Favorite,
	FavoriteBorder,
	NotInterested,
} from '@material-ui/icons';
//Q&M
import User, { CURRENT_USER_QUERY } from './Queries/User';
import { EVENT_QUERY } from './Queries/Event';
import { GET_CONVERSATION_QUERY } from './Queries/getConvo';
import { USER_QUERY } from './Queries/OtherUser';
import { ADD_EVENT_MUTATION } from './Mutations/addEvent';
import { CREATE_CHAT_MUTATION } from './Mutations/createChat';
import { SEND_MESSAGE_MUTATION } from './Mutations/sendMessage';
import {
	UPDATE_USER_MUTATION,
	LIKE_USER_MUTATION,
	UNLIKE_USER_MUTATION,
	UPDATE_BLOCKS_MUTATION,
} from './Mutations/updateUser';

//Components
import InfoModal from './Home/InfoModal';
import Transition from './Transistion';
//StyledComponents
import Button from '../styledComponents/CustomButtons/Button';
import CustomInput from '../styledComponents/CustomInput/CustomInput.jsx';
import Media from '../styledComponents/Media/Media.jsx';

//styles
import styles from '../static/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx';
import '../styles/Home/EventModal.scss';
//utils
import getAge from '../utils/getAge';

let settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
};

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
	const msgRef = useRef(null);
	//console.log(msgRef.current);
	//let isLiked =
	useEffect(
		() => {
			if (msgRef.current) {
				msgRef.current.scrollTop = msgRef.current.scrollHeight;
			}
		},
		[ msgRef.current ],
	);

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
				let isLiked = currentUser
					? currentUser.liked.find(user => user.id === id.value)
					: false;
				let userImg =
					currentUser && currentUser.img.find(img => img.default)
						? currentUser.img.find(img => img.default).img_url
						: null;
				let matchImg = match
					? match.img.find(img => img.default) &&
						match.img.find(img => img.default).img_url
					: null;
				if (!match) return <div />;
				else {
					NProgress.done();
					return (
						<Dialog
							classes={{
								root: classes.modalRoot,
								paper: classes.modalLarge,
							}}
							open={user ? true : false}
							TransitionComponent={Transition}
							scroll='body'
							onClose={() =>
								Router.push(
									router.pathname,
									router.pathname,
									{ shallow: true },
									{ scroll: false },
								)}
							aria-labelledby='notice-modal-slide-title'
							aria-describedby='notice-modal-slide-description'
						>
							<DialogTitle
								id='notice-modal-slide-title'
								disableTypography
								className={`${classes.modalHeader} ${classes.userModalHeader}`}
							>
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
									<Close
										style={{ color: '#fafafa' }}
										className={classes.modalClose}
									/>
								</Button>
								<div
									style={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										position: 'relative',
									}}
								>
									<h4
										style={{
											fontWeight: 700,
											color: '#fafafa',
											marginRight: '10px',
											fontSize: '40px',
										}}
										className={classes.modalTitle}
									>
										{match.firstName.toUpperCase()}{' '}
										<span style={{ padding: '0 3px' }}>&#8226;</span>{' '}
										{getAge(match.dob)}
									</h4>
									<IconButton
										className={classes.liked}
										onClick={() => (isLiked ? unlike() : like())}
									>
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
								<div style={{ marginRight: '20px', width: '50%' }}>
									<Slider {...settings}>
										{match.img.map(img => (
											<div key={img.img_url}>
												<img
													src={img.img_url}
													style={{ height: '375px', width: '375px' }}
												/>
											</div>
										))}
									</Slider>
									<div className='gradient-box'>
										<div className='date'>
											{match.biography ? (
												match.biography
											) : (
												'Hi der This is my lil fill in bio guy'
											)}
										</div>
									</div>
								</div>
								<div>
									{/* <div
										
										style={{
											height: '452px',
											height: '375px',
										}}
										src={matchImg}
									/> */}
								</div>
								<div className={classes.chatBorder}>
									<div ref={msgRef} className={classes.chat}>
										{convo.data.getConversation &&
											convo.data.getConversation.messages &&
											convo.data.getConversation.messages.map(message => {
												let img = message.from.img.find(img => img.default)
													.img_url;
												return (
													<Media
														currentUser={
															currentUser &&
															message.from.id === currentUser.id
														}
														key={message.id}
														avatar={img}
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
												);
											})}
									</div>
									<div>
										<Media
											avatar={userImg}
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
