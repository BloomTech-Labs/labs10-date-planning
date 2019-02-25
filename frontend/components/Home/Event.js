import React, { useState, useEffect, useRef } from 'react';
import moment from 'moment';
import NProgress from 'nprogress';
//MUI

import { Bookmark, Add } from '@material-ui/icons';
import withStyles from '@material-ui/core/styles/withStyles';

//Components
import EventModal from './EventModal';
//Styled components
import Card from '../../styledComponents/Card/Card';
import Button from '../../styledComponents/CustomButtons/Button';
import CardHeader from '../../styledComponents/Card/CardHeader';
import CardFooter from '../../styledComponents/Card/CardFooter';
import CardBody from '../../styledComponents/Card/CardBody';
//styles
import CardStyles from '../../static/jss/material-kit-pro-react/views/componentsSections/sectionCards';

import '../../styles/Home/Event.scss';

const Event = ({ event, classes, user }) => {
	const [ modal, showModal ] = useState(false);
	const [ rotate, setRotate ] = useState('');
	const [ height, setHeight ] = useState('0px');
	const divEl = useRef(null);
	let isSaved = user.events.find(e => e.id === event.id);
	useEffect(
		() => {
			if (divEl) {
				console.log(divEl.current.clientHeight);
				setHeight(`${divEl.current.clientHeight}px`);
			}
		},
		[ divEl ],
	);
	event.times = event.times.sort((a, b) => {
		let dateA = new Date(a);
		let dateB = new Date(b);
		return dateA - dateB;
	});

	return (
		<div style={{ height: 'max-content' }}>
			<div
				style={{ height: height }}
				className={`${classes.rotatingCardContainer} ${classes.manualRotate} ${rotate}`}
			>
				<Card blog className={classes.cardRotate}>
					<div ref={divEl} className={`${classes.front} `}>
						{event.image_url && (
							<CardHeader image>
								<a href='#pablo' onClick={e => e.preventDefault()}>
									<img src={event.image_url} alt='...' />
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
							{/* <h6 style={{border: '2px solid #b2ddf7', borderRadius: '6px', padding: '10px'}}className={classes.cardCategory}>{event.location.venue}</h6> */}
							<h6
								style={{
									// backgroundColor: '#b2ddf7',
									backgroundImage:
										'linear-gradient(to top, #8ad2ff, #94d5fd, #9fd8fb, #a8daf9, #b2ddf7)',
									color: '#fafafa',
									borderRadius: '6px',
									padding: '10px',
								}}
								className={classes.cardCategory}
							>
								{event.location.venue}
							</h6>
							<h4 className={classes.cardTitle}>
								<a href='#pablo' onClick={e => e.preventDefault()}>
									{event.title}
								</a>
							</h4>
						</CardBody>
						<CardFooter>
							{isSaved && <Bookmark className='Event__bookmark' />}
							<div
								style={{ cursor: 'pointer' }}
								onClick={() => setRotate(classes.activateRotate)}
							>
								{event.attending.length ? (
									`${event.attending.length} users interested in this event.`
								) : (
									''
								)}
							</div>
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
						style={{ height: 'auto', backgroundColor: 'white' }}
						className={`${classes.back}  ${classes.wrapperBackground} `}
					>
						<CardBody
							background
							style={{ backgroundColor: 'white', borderRadius: '6px', width: '100%' }}
							className={`${classes.cardBodyRotate} `}
						>
							<h5 className={classes.cardTitleWhite}>Manage Post</h5>
							<p className={classes.cardDescriptionWhite}>
								As an Admin, you have shortcuts to edit, view or delete the posts.
							</p>
							<div className={classes.textCenter}>
								<br />
								<br />
								<Button round color='danger' onClick={() => setRotate('')}>
									Back...
								</Button>
							</div>
						</CardBody>
					</div>
				</Card>
			</div>
		</div>
	);
};

export default withStyles(CardStyles)(Event);
