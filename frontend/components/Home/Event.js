import React, { useState, useEffect, useRef } from 'react';
import { withApollo, Mutation } from 'react-apollo';
import moment from 'moment';
import NProgress from 'nprogress';
import Slider from 'react-slick';
import { useMutation } from 'react-apollo-hooks';

//query& M
import { CURRENT_USER_QUERY } from '../Queries/User';
import { ALL_EVENTS_QUERY } from '../Queries/AllEvents';
import { ADD_EVENT_MUTATION } from '../Mutations/addEvent';
import { DELETE_EVENT_MUTATION } from '../Mutations/updateUser';
//MUI

import { Bookmark, Add, ChevronLeft, BookmarkBorder, FlashOn } from '@material-ui/icons';
import {
	IconButton,
	Table,
	TableBody,
	TableCell,
	TableRow,
	TableHead,
	Typography,
	Avatar,
} from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';

//Components
import UserModel from './EventModal';
import InfoModal from './InfoModal';
//Styled components
import Card from '../../styledComponents/Card/Card';
import Button from '../../styledComponents/CustomButtons/Button';
import CardHeader from '../../styledComponents/Card/CardHeader';
import CardFooter from '../../styledComponents/Card/CardFooter';
import CardBody from '../../styledComponents/Card/CardBody';
import GridContainer from '../../styledComponents/Grid/GridContainer';
import GridItem from '../../styledComponents/Grid/GridItem';
//utils
import getAge from '../../utils/getAge';
//styles
import CardStyles from '../../static/jss/material-kit-pro-react/views/componentsSections/sectionCards';
import '../../styles/Home/Event.scss';

import '../../styles/Home/EventModal.scss';

//import '../../styles/Settings/Date.scss';

let settings = {
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
};

const Event = ({ event, classes, user, location, refetch }) => {
	const deleteEvent = useMutation(DELETE_EVENT_MUTATION, {
		variables: { id: event.id },
	});

	const [ modal, showModal ] = useState(false);
	const [ rotate, setRotate ] = useState('');
	const [ height, setHeight ] = useState('191px');
	const [ val, set ] = useState(false);
	const divEl = useRef(null);
	const imgEl = useRef(null);
	let isSaved = user.events.find(e => e.id === event.id);
	let potentialMatches = event.attending.filter(
		u =>
			u.id !== user.id &&
			(!user.minAgePref ||
				(getAge(u.dob) >= user.minAgePref && getAge(u.dob) <= user.maxAgePref)),
	);

	useEffect(
		() => {
			if (divEl) {
				setHeight(`${divEl.current.clientHeight}px`);
			}
		},
		[ divEl, val ],
	);

	useEffect(
		() => {
			if (imgEl) {
				if (imgEl.current.clientHeight === 0) {
					set(true);
				}
			}
		},
		[ imgEl ],
	);

	const handleClick = async (e, addEvent) => {
		//e.stopPropagation();

		if (isSaved) {
			NProgress.start();
			let res = await deleteEvent();
			if (res.data || res.error) NProgress.done();
		} else {
			addEvent();
		}
	};

	event.times = event.times.sort((a, b) => {
		let dateA = new Date(a);
		let dateB = new Date(b);
		return dateA - dateB;
	});

	return (
		<div style={{ height: 'max-content' }}>
			<div
				// onMouseEnter={() => setHeight(`${divEl.current.clientHeight}px`)}
				// onMouseLeave={() => setHeight('191px')}
				style={{ height: height }}
				className={`${classes.rotatingCardContainer} ${classes.manualRotate} ${rotate}`}
			>
				<Card blog className={`${classes.cardRotate}`}>
					<div ref={divEl} className={`${classes.front} Event__border`}>
						{event.image_url && (
							<CardHeader image>
								<a href='#' onClick={e => e.preventDefault()}>
									<img ref={imgEl} src={event.image_url} alt='...' />
								</a>
								<div
									className={classes.coloredShadow}
									style={{
										backgroundImage: `url(${event.image_url})`,
										opacity: '1',
									}}
								/>
							</CardHeader>
						)}
						<CardBody className={classes.cardBodyRotate}>
							<Mutation
								mutation={ADD_EVENT_MUTATION}
								variables={{
									title: event.title,
									venue: event.location.venue,
									image_url: event.image_url,
									times: event.times,
									city: event.location.city,
									address: event.location.address,
									lat: event.location.lat,
									long: event.location.long,
									description: event.description,
								}}
								update={(cache, { data: { addEvent } }) => {
									const { currentUser } = cache.readQuery({
										query: CURRENT_USER_QUERY,
									});

									cache.writeQuery({
										query: CURRENT_USER_QUERY,
										data: {
											currentUser: {
												...currentUser,
												events: [ ...currentUser.events, addEvent ],
											},
										},
									});
								}}
								// refetchQueries={[
								// 	{
								// 		query: ALL_EVENTS_QUERY,
								// 		variables: { location: location.value },
								// 	},
								// ]}
								// awaitRefetchQueries
								onError={() => NProgress.done()}
								onCompleted={async () => {
									await refetch();
								}}
							>
								{(addEvent, { error, loading, called, data }) => {
									if (error) console.log(error);
									if (called) NProgress.start();

									return (
										<Typography variant='h4' className={classes.cardTitle}>
											<a href='#' onClick={e => e.preventDefault()}>
												{event.title}{' '}
												<IconButton
													//disabled={isSaved !== undefined}
													onClick={e => handleClick(e, addEvent)}
												>
													{isSaved ? <Bookmark /> : <BookmarkBorder />}
												</IconButton>
											</a>
										</Typography>
									);
								}}
							</Mutation>
							<div className={` gradient_border`}>
								{event.location.venue}
								<div
									className={`${classes.stats} ${classes.mlAuto}`}
									style={{ display: 'block' }}
								>
									{event.times.length > 2 ? (
										<div>
											{moment(event.times[0]).calendar()} -{' '}
											{moment(event.times[event.times.length - 1]).calendar()}
										</div>
									) : (
										event.times.map((time, i) => (
											<div key={i}>{moment(time).calendar()}</div>
										))
									)}
								</div>
							</div>
						</CardBody>

						{/* {isSaved && <Bookmark className='Event__bookmark' />} */}

						{potentialMatches.length ? (
							<CardFooter style={{ display: 'block' }}>
								<div
									style={{ cursor: 'pointer', display: 'flex' }}
									onClick={() => setRotate(classes.activateRotate)}
								>
									<FlashOn style={{ color: '#ff101f' }} />
									<p>
										{potentialMatches.length} potential match{potentialMatches.length > 1 ? 'es ' : ' '}
									</p>
								</div>
								<div style={{ display: 'flex' }}>
									{potentialMatches.map(usr => (
										<img
											key={usr.id}
											src={usr.imageThumbnail}
											style={{
												width: '30px',
												height: '30px',
												borderRadius: '6px',
												border: '1px solid #cabac8',
											}}
										/>
									))}
								</div>
							</CardFooter>
						) : (
							''
						)}

						{/* <EventModal modal={modal} showModal={showModal} event={event} /> */}
					</div>
					<GridContainer
						style={{
							height: 'auto',
							margin: 0,
						}}
						className={`${classes.back} Event__border `}
					>
						<GridItem sm={12} md={12}>
							<CardBody
								//background
								style={{
									//backgroundColor: 'white',
									padding: '15px',
									borderRadius: '6px',
									width: '100%',
									maxWidth: '100%',
									height: divEl.current
										? `${divEl.current.clientHeight}px`
										: height,
									display: 'block',
								}}
								className={`${classes.cardBodyRotate} `}
							>
								<div style={{ display: 'flex' }}>
									<IconButton
										style={{ height: '30px', width: '30px' }}
										onClick={() => setRotate('')}
									>
										<ChevronLeft />
									</IconButton>
									<div>
										<h3 className={classes.cardTitle}>
											<a href='#' onClick={e => e.preventDefault()}>
												{event.title}
											</a>
										</h3>
										<h6 style={{ color: '#ff101f' }}>
											Showing{' '}
											{!user.genderPrefs.length ||
											user.genderPrefs.length === 3 ? (
												' everyone '
											) : user.genderPrefs.includes(
												'MALE',
											) ? user.genderPrefs.includes('FEMALE') ? (
												' men and women '
											) : (
												' men '
											) : (
												' women '
											)}{' '}
											between the ages of {user.minAgePref || '18'} and{' '}
											{user.maxAgePref || '100'}
										</h6>
									</div>
								</div>
								<GridContainer>
									{potentialMatches.map(usr => (
										<GridItem
											key={usr.id}
											sm={4}
											md={4}
											style={{ padding: '5px' }}
										>
											<div
												className='user_card'
												onClick={() => showModal(true)}
											>
												<div
													className='gradient_border'
													style={{
														//borderRadius: '50%',
														padding: '5px',
														marginBottom: '5px',
														flexDirection: 'column',
													}}
												>
													<Avatar
														src={usr.imageThumbnail}
														imgProps={{ height: 70, width: 70 }}
														style={{
															width: '100%',
															height: '124px',
															borderRadius: '6px',
														}}
													/>
													<div
														style={{
															display: 'flex',
															justifyContent: 'center',
														}}
													>
														<p style={{ margin: 0 }}>
															{usr.firstName} |{' '}
														</p>
														<p style={{ margin: 0 }}>
															{getAge(usr.dob)}
														</p>
													</div>
												</div>
											</div>
											<UserModel
												modal={modal}
												showModal={showModal}
												potentialMatch={usr}
											/>
										</GridItem>
									))}
								</GridContainer>
							</CardBody>
						</GridItem>
					</GridContainer>
					<InfoModal showModal={showModal} modal={modal} />
				</Card>
			</div>
		</div>
	);
};

export default withStyles(CardStyles)(Event);
