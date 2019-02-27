import React, { useState, useEffect, useRef } from 'react';
import { withApollo, Mutation } from 'react-apollo';
import moment from 'moment';
import NProgress from 'nprogress';
import Slider from 'react-slick';

//query& M
import { CURRENT_USER_QUERY } from '../Queries/User';
import { ALL_EVENTS_QUERY } from '../Queries/AllEvents';
import { ADD_EVENT_MUTATION } from '../Mutations/addEvent';
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
import EventModal from './EventModal';
import InfoModal from './InfoModal';
//Styled components
import Card from '../../styledComponents/Card/Card';
import Button from '../../styledComponents/CustomButtons/Button';
import CardHeader from '../../styledComponents/Card/CardHeader';
import CardFooter from '../../styledComponents/Card/CardFooter';
import CardBody from '../../styledComponents/Card/CardBody';
//utils
import getAge from '../../utils/getAge';
//styles
import CardStyles from '../../static/jss/material-kit-pro-react/views/componentsSections/sectionCards';
import '../../styles/Home/Event.scss';

import '../../styles/Home/EventModal.scss';
//import '../../styles/Settings/Date.scss';

function useForceUpdate() {
	const [ value, set ] = useState(true); //boolean state
	return () => set(!value); // toggle the state to force render
}
let settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
};
const Event = ({ event, classes, user, location }) => {
	const [ modal, showModal ] = useState({});
	const [ rotate, setRotate ] = useState('');
	const [ height, setHeight ] = useState('191px');
	const [ val, set ] = useState(false);
	const divEl = useRef(null);
	const imgEl = useRef(null);
	let isSaved = user.events.find(e => e.id === event.id);

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
		console.log(event);
		e.stopPropagation();

		showModal({ message: true });

		addEvent();
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
				<Card blog className={classes.cardRotate}>
					<div
						ref={divEl}
						style={{ backgroundColor: '#fafafa', border: '3px solid #4cb5ae' }}
						className={`${classes.front} `}
					>
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
							<div className='gradient-box'>
								<span
								// style={{
								// 	// backgroundColor: '#b2ddf7',
								// 	backgroundImage:
								// 		'linear-gradient(to top, #8ad2ff, #94d5fd, #9fd8fb, #a8daf9, #b2ddf7)',
								// 	color: '#fafafa',
								// 	borderRadius: '6px',
								// 	padding: '10px',
								// }}
								// className={classes.cardCategory}
								>
									{event.location.venue}
								</span>
							</div>

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
									// const { getEvents } = cache.readQuery({
									// 	query: ALL_EVENTS_QUERY,
									// 	variables: {
									// 		location,
									// 		page: 0,
									// 		categories: [],
									// 		dates: [],
									// 		genres: [],
									// 	},
									// });

									cache.writeQuery({
										query: CURRENT_USER_QUERY,
										data: {
											currentUser: {
												...currentUser,
												events: [ ...currentUser.events, addEvent ],
											},
										},
									});
									// cache.writeQuery({
									// 	query: ALL_EVENTS_QUERY,
									// 	data: {
									// 		getEvents: {
									// 			...getEvents,
									// 			events: newEvents,
									// 		},
									// 	},
									// });
								}}
								refetchQueries={[
									{ query: ALL_EVENTS_QUERY, variables: { location: location } },
								]}
								awaitRefetchQueries
								onError={() => NProgress.done()}
								onCompleted={() => NProgress.done()}
							>
								{(addEvent, { error, loading, called }) => {
									if (called) NProgress.start();
									return (
										<Typography className={classes.cardTitle}>
											<a href='#' onClick={e => e.preventDefault()}>
												{event.title}{' '}
												<IconButton
													disabled={isSaved !== undefined}
													onClick={e => handleClick(e, addEvent)}
												>
													{isSaved ? <Bookmark /> : <BookmarkBorder />}
												</IconButton>
											</a>
										</Typography>
									);
								}}
							</Mutation>
							{/* {event.description && (
								<div className='gradient-box'>
									<span>{event.description}</span>
								</div>
							)} */}
						</CardBody>
						<CardFooter>
							{/* {isSaved && <Bookmark className='Event__bookmark' />} */}

							{event.attending.length ? (
								<div
									style={{ cursor: 'pointer', display: 'flex' }}
									onClick={() => setRotate(classes.activateRotate)}
								>
									<FlashOn />
									<p>{event.attending.length} users interested in this event.</p>
								</div>
							) : (
								''
							)}

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
						</CardFooter>
						{/* <EventModal modal={modal} showModal={showModal} event={event} /> */}
					</div>
					<div
						style={{
							height: 'auto',
							backgroundImage:
								'linear-gradient(to right, #81d6e3, #98ceea, #b1c5e5, #c4bed7, #cabac8)',
						}}
						className={`${classes.back}  ${classes.wrapperBackground} `}
					>
						<CardBody
							background
							style={{
								//backgroundColor: 'white',
								borderRadius: '6px',
								width: '100%',
								maxWidth: '100%',
								height: divEl.current ? `${divEl.current.clientHeight}px` : height,
								display: 'block',
							}}
							className={`${classes.cardBodyRotate} `}
						>
							<div style={{ display: 'flex' }}>
								<IconButton onClick={() => setRotate('')}>
									<ChevronLeft />
								</IconButton>
								<h4 className={classes.cardTitle}>
									<a href='#' onClick={e => e.preventDefault()}>
										{event.title}
									</a>
								</h4>
							</div>
							<Slider {...settings}>
								{event.attending.map(usr => (
									<div>
										<Avatar
											src={usr.imageThumbnail}
											imgProps={{ height: 80, width: 80 }}
										/>
										<h2>{user.firstName}</h2>
									</div>
								))}
							</Slider>
							<Table>
								<TableBody />
							</Table>
						</CardBody>
					</div>
					<InfoModal showModal={showModal} modal={modal} />
				</Card>
			</div>
		</div>
	);
};

export default withStyles(CardStyles)(Event);
