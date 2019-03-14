import React, { useState, useEffect, useRef } from 'react';
import { Mutation } from 'react-apollo';
import moment from 'moment';
import NProgress from 'nprogress';
import { useMutation } from '../Mutations/useMutation';
import Router from 'next/router';

//query& M
import { CURRENT_USER_QUERY } from '../Queries/User';
import { ADD_EVENT_MUTATION } from '../Mutations/addEvent';
import { DELETE_EVENT_MUTATION } from '../Mutations/updateUser';

//MUI
import {
	Favorite,
	ChatBubble as Chat,
	SubdirectoryArrowRightRounded as Flipper,
	SubdirectoryArrowLeftRounded as Flopper,
} from '@material-ui/icons';
import { IconButton, Typography, Avatar, Button } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';

//Images
import Arrow from '../../static/img/up4Arrow.png';
import standIn from '../../static/img/placeholder.jpg';

//Components
import Up4 from './UpFor';
import ErrorModal from '../SplashPage/ErrorModal';
//Styled components
import Card from '../../styledComponents/Card/Card';
import CardHeader from '../../styledComponents/Card/CardHeader';
import CardFooter from '../../styledComponents/Card/CardFooter';
import CardBody from '../../styledComponents/Card/CardBody';
import GridContainer from '../../styledComponents/Grid/GridContainer';
import GridItem from '../../styledComponents/Grid/GridItem';

//utils
import getAge from '../../utils/getAge';

//styles
import CardStyles from '../../static/jss/material-kit-pro-react/views/componentsSections/sectionCards';

const Event = React.memo(({ event, classes, user, refetch }) => {
	const [ deleteEvent ] = useMutation(DELETE_EVENT_MUTATION, {
		variables: { id: event.id },
		onCompleted: e => console.log(e),
		onError: e => console.log(e),
	});
	const [ error, setError ] = useState(null);
	const [ rotate, setRotate ] = useState('');
	const [ height, setHeight ] = useState(0);
	const [ val, set ] = useState(false);
	const [ saved, setSaved ] = useState('false');
	const divEl = useRef(null);
	const imgEl = useRef(null);
	let isSaved = user ? user.events.find(e => e.id === event.id) : false;

	useEffect(
		() => {
			NProgress.start();
			if (imgEl.current) {
				if (imgEl.current.complete) set(true);
			}
		},
		[ imgEl ],
	);

	useEffect(
		() => {
			if (val) {
				setHeight(`${divEl.current.clientHeight}px`);
				NProgress.done();
			}
		},
		[ val ],
	);

	event.times = event.times.sort((a, b) => {
		let dateA = new Date(a);
		let dateB = new Date(b);
		return dateA - dateB;
	});

	return (
		<div
			style={{
				height: 'max-content',
				position: 'relative',
				opacity: height === 0 ? '0' : '1',
			}}
		>
			{error ? <ErrorModal error={error} billing /> : null}
			<div
				style={{ height: height }}
				className={`${classes.rotatingCardContainer} ${classes.manualRotate} ${rotate}`}
			>
				<Card blog className={classes.cardRotate}>
					<div ref={divEl} className={`${classes.front} ${classes.eventBorder}`}>
						{event.image_url && (
							<CardHeader style={{ position: 'relative' }} image>
								<a href='#' onClick={e => e.preventDefault()}>
									<img
										style={{ border: '1px solid #cabac8' }}
										ref={imgEl}
										src={event.image_url}
										alt='...'
										onLoad={() => {
											set(true);
										}}
									/>
								</a>
								<div
									className={`${classes.coloredShadow} `}
									style={{
										backgroundImage: `url(${event.image_url})`,
										opacity: '1',
									}}
								/>
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
									onError={e => {
										NProgress.done();
										setError(e);
									}}
									onCompleted={() => {
										NProgress.done();
									}}
								>
									{(addEvent, { error, loading, called, data }) => {
										if (error) console.log(error);
										if (called) NProgress.start();

										return (
											<div
												className={
													isSaved ? (
														`${classes.up4} ${classes.up4Saved}`
													) : (
														classes.up4
													)
												}
											>
												<div style={{ cursor: 'pointer' }}>
													{isSaved ? (
														<div onClick={() => deleteEvent()}>
															<img
																className={classes.arrow}
																src={Arrow}
															/>
														</div>
													) : (
														<Up4
															handleClick={() => addEvent()}
															justFour
														/>
													)}
												</div>
											</div>
										);
									}}
								</Mutation>
							</CardHeader>
						)}
						<CardBody className={classes.cardBodyRotate}>
							<Typography variant='h4' className={classes.cardTitle}>
								{event.title}
							</Typography>

							<div className={classes.gradientBorder}>
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
						{event.attending.length ? (
							<CardFooter
								style={{ display: 'flex', justifyContent: 'space-between' }}
							>
								<div style={{ display: 'flex' }}>
									{event.attending.filter(x => x.id !== user.id).map(usr => {
										return (
											<img
												key={usr.id}
												src={
													usr.img.length ? (
														usr.img.find(img => img.default).img_url
													) : (
														standIn
													)
												}
												style={{
													width: '30px',
													height: '30px',
													borderRadius: '6px',
													border: '1px solid #cabac8',
												}}
											/>
										);
									})}
								</div>
								<div
									onClick={() => setRotate(classes.activateRotate)}
									className={classes.flip}
								>
									<Flipper
										className={classes.flipper}
										style={{ fontSize: '36px' }}
									/>
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
						className={`${classes.back} ${classes.eventBorderBack} `}
					>
						<GridItem sm={12} md={12}>
							<CardBody
								style={{
									height: divEl.current
										? `${divEl.current.clientHeight}px`
										: height,
								}}
								className={`${classes.cardBodyRotate} ${classes.cardBodyReverse}`}
							>
								<div className={classes.cardBodyRotateHeader}>
									<div>
										<h3 className={classes.cardTitle}>
											<a href='#' onClick={e => e.preventDefault()}>
												{event.title}
											</a>
										</h3>
										<h6 style={{ color: '#263238', fontSize: '15px' }}>
											Showing{' '}
											{!user ||
											!user.genderPrefs.length ||
											user.genderPrefs.length === 3 ? (
												<span className='genderPreference'>everyone</span>
											) : user.genderPrefs.includes(
												'MALE',
											) ? user.genderPrefs.includes('FEMALE') ? (
												<span className='genderPreference'>
													men and women
												</span>
											) : (
												<span className='genderPreference'>men</span>
											) : (
												<span className='genderPreference'>women</span>
											)}{' '}
											between the ages of{' '}
											<span
												style={{ marginRight: '3px' }}
												className='agePreference'
											>
												{user && user.minAgePref ? user.minAgePref : '18'}
											</span>
											and{' '}
											<span className='agePreference'>
												{user && user.maxAgePref ? user.maxAgePref : '100'}
											</span>
										</h6>
									</div>
								</div>
								<GridContainer>
									{event.attending.map(usr => {
										let chat = user
											? user.chats.find(x =>
													x.users.some(y => y.id === usr.id),
												)
											: false;
										let liked = user
											? user.liked.find(x => x.id === usr.id)
											: false;

										return (
											<GridItem
												key={usr.id}
												sm={4}
												md={4}
												style={{ padding: '5px', position: 'relative' }}
											>
												{liked && <Favorite className={classes.favorite} />}
												{chat && <Chat className={classes.chat} />}
												<div
													onClick={() => {
														NProgress.start();
														Router.push(
															`/home?user=${usr.id}`,
															`/home/user/${usr.id}`,
															{ shallow: true },
															{ scroll: false },
														);
													}}
												>
													<div
														className={` ${classes.gradientBorder}  ${classes.userCard}`}
													>
														<Avatar
															src={
																usr.img.length ? (
																	usr.img.find(img => img.default)
																		.img_url
																) : (
																	standIn
																)
															}
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
																{usr.firstName}{' '}
																<span style={{ padding: '0 3px' }}>&#8226;</span>
															</p>
															<p style={{ margin: '0 0 0 2px' }}>
																{getAge(usr.dob)}
															</p>
														</div>
													</div>
												</div>
											</GridItem>
										);
									})}
								</GridContainer>
								<div
									onClick={() => setRotate('')}
									className={` ${classes.flip} ${classes.flop}`}
								>
									<Flopper
										className={classes.flipper}
										style={{ fontSize: '36px' }}
									/>
								</div>
							</CardBody>
						</GridItem>
					</GridContainer>
				</Card>
			</div>
		</div>
	);
});

export default withStyles(CardStyles)(Event);
