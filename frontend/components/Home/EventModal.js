import React, { useState, useEffect, Fragment } from 'react';
import { withApollo, Mutation } from 'react-apollo';
import moment from 'moment';
import NProgress from 'nprogress';
import InfoModal from './InfoModal';
import User from '../Queries/User';
import { EVENT_QUERY } from '../Queries/Event';
import { ADD_EVENT_MUTATION } from '../Mutations/addEvent';
import { CURRENT_USER_QUERY } from '../Queries/User';
import BookMark from '@material-ui/icons/BookmarkBorder';
import withStyles from '@material-ui/core/styles/withStyles';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '../../styledComponents/CustomButtons/Button';
import Close from '@material-ui/icons/Close';
import styles from '../../static/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx';

import '../../styles/Home/EventModal.scss';

const EventModal = ({ modal, showModal, classes, event, client }) => {
	const [ messageModal, showMessageModal ] = useState({});
	useState(
		() => {
			console.log(event);
		},
		[ modal ],
	);

	const handleClick = async (e, addEvent, user) => {
		e.stopPropagation();
		if (user.permissions[0] === 'FREE') {
			if (user.events.length === 5) {
				showMessageModal({
					error: 'You have reached your maximum limit for your free account.',
				});
			} else {
				showMessageModal({ warning: `You have ${5 - user.events.length} remaining.` });
			}
		} else {
			showMessageModal({ message: true });
		}
		addEvent();
	};

	const modalHeader = {
		// backgroundColor: '#81d6e3',
		backgroundImage: 'linear-gradient(to top, #8ad2ff, #94d5fd, #9fd8fb, #a8daf9, #b2ddf7)',
		borderTopLeftRadius: '6px',
		borderTopRightRadius: '6px',
		paddingBottom: '15px',
		color: '#fafafa',
	};

	return (
		<User>
			{({ data }) => {
				let isSaved = data.currentUser.events.find(e => e.eventfulID === event.id);
				return (
					<Mutation
						mutation={ADD_EVENT_MUTATION}
						variables={{ eventId: event.id }}
						refetchQueries={[ { query: CURRENT_USER_QUERY } ]}
					>
						{(addEvent, { error, loading, called }) => {
							if (called) NProgress.start();
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
									{event ? (
										<Fragment>
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
													style={{ fontWeight: 700 }}
													className={classes.modalTitle}
												>
													{event.title} <BookMark />
												</h4>
											</DialogTitle>
											<DialogContent
												id='notice-modal-slide-description'
												classes={{ root: 'dialogContent' }}
												className={classes.modalBody}
											>
												<div className='date'>
													{event.times.length > 2 ? (
														<Fragment>
															{moment(event.times[0]).format('ddd, MMMM Do, h:mm a')}{' '}
															-{' '}
															{moment(
																event.times[event.times.length - 1],
															).format('ddd, MMMM Do, h:mm a')}
														</Fragment>
													) : (
														event.times.map((time, i) => (
															<Fragment key={i}>
																<div>
																	{moment(time).format(
																		'ddd, MMMM Do, h:mm a',
																	)}
																</div>
															</Fragment>
														))
													)}
												</div>
												{/* </div> */}
												<img
													style={{
														margin: '20px 0',
														borderRadius: '6px',
														overflow: 'hidden',
														width: '100%',
													}}
													src={event.large_url}
												/>
												<div
													dangerouslySetInnerHTML={{
														__html: event.description,
													}}
												/>

												<Button
													fullWidth
													disabled={isSaved}
													onClick={e =>
														handleClick(e, addEvent, data.currentUser)}
												>
													{isSaved ? (
														'You have this event saved.'
													) : (
														'Add Event'
													)}
												</Button>
											</DialogContent>
										</Fragment>
									) : (
										<div>...loading</div>
									)}
									<InfoModal showModal={showMessageModal} modal={messageModal} />
								</Dialog>
							);
						}}
					</Mutation>
				);
			}}
		</User>
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
