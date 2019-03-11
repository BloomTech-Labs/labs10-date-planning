import React, { useState, useEffect, Fragment, useRef } from 'react';
import { withApollo, Mutation, Query } from 'react-apollo';

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
	MoreHoriz,
} from '@material-ui/icons';
//Q&M
import User, { CURRENT_USER_QUERY } from '../Queries/User';
import { EVENT_QUERY } from '../Queries/Event';
//import { GET_CONVERSATION_QUERY } from '../Queries/getConvo';
import { USER_QUERY, SHARED_EVENTS_QUERY } from '../Queries/OtherUser';
import { ADD_EVENT_MUTATION } from '../Mutations/addEvent';
//import { CREATE_CHAT_MUTATION } from '../Mutations/createChat';
import { SEND_MESSAGE_MUTATION } from '../Mutations/sendMessage';
import {
	UPDATE_USER_MUTATION,
	LIKE_USER_MUTATION,
	UNLIKE_USER_MUTATION,
	UPDATE_BLOCKS_MUTATION,
} from '../Mutations/updateUser';
import { UDPATE_SEEN_MSG_MUTATION } from '../Mutations/updateSeenMessage';

//Components
import Chat from './Chat';
import Transition from '../Transistion';
import CommonEvents from './CommonEvents';
//StyledComponents
import Button from '../../styledComponents/CustomButtons/Button';
import GridContainer from '../../styledComponents/Grid/GridContainer';
import GridItem from '../../styledComponents/Grid/GridItem';
import CustomDropdown from '../../styledComponents/CustomDropdown/CustomDropdown.jsx';
//styles
import styles from '../../static/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx';
import '../../styles/Home/EventModal.scss';
//utils
import getAge from '../../utils/getAge';

let settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
};

const Composed = adopt({
	potentialMatch: ({ id, render }) => (
		<Query query={USER_QUERY} variables={{ id }}>
			{render}
		</Query>
	),

	like: ({ id, render }) => (
		<Mutation
			mutation={LIKE_USER_MUTATION}
			variables={{ like: id }}
			onCompleted={() => NProgress.done()}
			onError={() => NProgress.done()}
		>
			{render}
		</Mutation>
	),
	unlike: ({ id, render }) => (
		<Mutation
			mutation={UNLIKE_USER_MUTATION}
			variables={{ like: id }}
			onCompleted={() => NProgress.done()}
			onError={() => NProgress.done()}
		>
			{render}
		</Mutation>
	),
	block: ({ id, render }) => (
		<Mutation
			mutation={UPDATE_BLOCKS_MUTATION}
			variables={{ block: id }}
			onCompleted={() => NProgress.done()}
			onError={() => NProgress.done()}
		>
			{render}
		</Mutation>
	),
});

const UserModal = ({ classes, user, router, currentUser }) => {
	return (
		<Composed id={user}>
			{({ like, unlike, block, potentialMatch }) => {
				console.log(potentialMatch);
				let match = potentialMatch.data ? potentialMatch.data.user : null;
				let isLiked = currentUser ? currentUser.liked.find(usr => usr.id === user) : false;
				{
					/* let userImg =
					currentUser && currentUser.img.find(img => img.default)
						? currentUser.img.find(img => img.default).img_url
						: null; */
				}
				//console.log(match.events, currentUser.events);
				if (!match) return <div />;
				else {
					NProgress.done();
					return (
						<Dialog
							classes={{
								root: classes.modalRoot,
								//paper: classes.modalLarge,
							}}
							open={user ? true : false}
							fullWidth
							fullScreen
							maxWidth='lg'
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
										justifyContent: 'space-between',
									}}
								>
									<div
										style={{
											display: 'flex',
											alignItems: 'center',
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
											{match.firstName.toUpperCase()}
											<span style={{ padding: '0 3px' }}>&#8226;</span>{' '}
											{getAge(match.dob)}
										</h4>
										<IconButton
											className={classes.liked}
											onClick={() => (isLiked ? unlike() : like())}
										>
											{isLiked ? <Favorite /> : <FavoriteBorder />}
										</IconButton>
									</div>

									<CustomDropdown
										dropPlacement='bottom-end'
										caret={false}
										hoverColor='dark'
										buttonText={<MoreHoriz />}
										buttonProps={{
											className:
												classes.navLink + ' ' + classes.imageDropdownButton,
											color: 'transparent',
										}}
										dropdownList={[ 'Block User' ]}
										onClick={() => block()}
									/>
								</div>
							</DialogTitle>
							<DialogContent
								style={{
									zIndex: 3,
								}}
								// id='notice-modal-slide-description'
								//classes={{ root: 'dialogContent' }}
								className={classes.modalBody}
							>
								<GridContainer>
									<GridItem md={3} lg={3}>
										<div className={classes.gradientBox}>
											<div className='date'>
												{match.biography ? (
													match.biography
												) : (
													'Hi der This is my lil fill in bio guy'
												)}
											</div>
										</div>

										<CommonEvents id={user} />
									</GridItem>
									<GridItem md={6} lg={6}>
										<div style={{ width: '100%' }}>
											<Slider {...settings}>
												{match.img.map(img => (
													<div key={img.img_url}>
														<img
															src={img.img_url}
															style={{
																height: '100%',
																width: '100%',
															}}
														/>
													</div>
												))}
											</Slider>
										</div>
									</GridItem>

									<GridItem md={3} lg={3}>
										<Chat id={user} currentUser={currentUser} />
									</GridItem>
								</GridContainer>
							</DialogContent>
						</Dialog>
					);
				}
			}}
		</Composed>
	);
};

export default withRouter(withApollo(withStyles(styles)(UserModal)));

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
