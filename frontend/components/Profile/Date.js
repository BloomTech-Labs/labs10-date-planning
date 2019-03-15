import React, { useState } from 'react';
import moment from 'moment';
import { withApollo } from 'react-apollo';
import Router from 'next/router';
import gql from 'graphql-tag';
import { useMutation } from '../Mutations/useMutation';
import Slider from 'react-slick';

// import 'pure-react-carousel/dist/react-carousel.es.css';
//MUI
import { IconButton, Typography, Avatar } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import {
	Favorite,
	ChatBubble as Chat,
	SubdirectoryArrowRightRounded as Flipper,
	SubdirectoryArrowLeftRounded as Flopper,
	Delete,
} from '@material-ui/icons';
//styled components
import Card from '../../styledComponents/Card/Card';
import { USER_EVENTS_QUERY } from '../Queries/UserEvents';
import CardHeader from '../../styledComponents/Card/CardHeader';
import CardFooter from '../../styledComponents/Card/CardFooter';
import CardBody from '../../styledComponents/Card/CardBody';
import GridItem from '../../styledComponents/Grid/GridItem';
import GridContainer from '../../styledComponents/Grid/GridContainer';
import Button from '../../styledComponents/CustomButtons/Button.jsx';
//styles
import CardStyles from '../../static/jss/material-kit-pro-react/views/componentsSections/sectionCards';

import getAge from '../../utils/getAge';

let settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 3,
	slidesToScroll: 3,
};

const DELETE_EVENT = gql`
	mutation deleteEvent($id: String!, $eventId: String!) {
		deleteEvent(id: $id, eventId: $eventId) {
			id
			events {
				id
				attending {
					id
				}
			}
		}
	}
`;

const Wrapper = ({ classes, carousel, children }) => {
	if (carousel)
		return (
			<Slider {...settings} className={classes.slicky}>
				{children}
			</Slider>
		);
	else return <div style={{ display: 'flex' }}>{children}</div>;
};

const DateView = ({ date, classes, client, currentUser, refetch }) => {
	const [ deleteEvent ] = useMutation(DELETE_EVENT, {
		variables: { id: currentUser.id, eventId: date.id },
		refetchQueries: [
			{
				query: USER_EVENTS_QUERY,
			},
		],
		onCompleted: () => console.log('hi'),
	});
	const carousel = date.attending.filter(usr => usr.id !== currentUser.id).length > 3;
	console.log(carousel);

	return (
		<GridItem sm={12} md={6} lg={6}>
			<Card
				background
				style={{
					position: 'relative',
					border: '4px solid #4cb5ae',
					borderRadius: '11px',
					backgroundImage: `url(${date.image_url})`,
				}}
			>
				<IconButton
					style={{ position: 'absolute', top: 0, right: 0, zIndex: 3 }}
					aria-label='Delete'
					onClick={() => deleteEvent()}
				>
					<Delete fontSize='small' style={{ color: '#fafafa' }} />
				</IconButton>
				<CardBody
					background
					style={{
						maxWidth: '100%',
						padding: '12px',
						height: '100%',
						paddingBottom: carousel ? 0 : '42px',
					}}
				>
					<h4 style={{ margin: '2px 11px' }} className={classes.cardTitleWhite}>
						{date.title}{' '}
					</h4>
					<h6 className={classes.cardCategoryWhite}>
						<span>{date.venue}</span> <span style={{ padding: '0 3px' }}>&#8226;</span>
						{date.times.length > 2 ? (
							<span>
								{moment(date.times[0]).calendar()} -{' '}
								{moment(date.times[date.times.length - 1]).calendar()}
							</span>
						) : (
							date.times.map((time, i) => (
								<span key={i}>{moment(time).calendar()}</span>
							))
						)}
					</h6>

					<Wrapper carousel={carousel} classes={classes}>
						{date.attending.filter(usr => usr.id !== currentUser.id).map((usr, i) => {
							let chat = currentUser
								? currentUser.chats.find(x => x.users.some(y => y.id === usr.id))
								: false;
							let liked = currentUser
								? currentUser.liked.find(x => x.id === usr.id)
								: false;
							return (
								<div
									key={currentUser.id}
									className={classes.eventUserCard}
									style={{
										width: carousel && '96%',
										margin: '5px',
									}}
									onClick={() => {
										NProgress.start();
										Router.push(
											`/profile?slug=events&user=${usr.id}`,
											`/profile/events/user/${usr.id}`,
											{ shallow: true },
											{ scroll: false },
										);
									}}
								>
									<div
										className={classes.userCardBorder}
										style={{
											border: '1px solid #cabac8',
											borderRadius: '7px',
										}}
									>
										<img
											src={
												usr.img.length ? (
													usr.img.find(img => img.default).img_url
												) : (
													standIn
												)
											}
											style={{
												// width: '130px',
												maxHeight: '148px',
												borderRadius: '6px',
											}}
										/>
									</div>
									<div
										style={{
											display: 'flex',
											justifyContent: 'center',
										}}
									>
										{liked && (
											<Favorite className={classes.userFavorite} />
										)}{' '}
										<p style={{ margin: 0 }} className={classes.title}>
											{usr.firstName}{' '}
											<span style={{ padding: '0 3px' }}>&#8226;</span>{' '}
										</p>
										<p
											style={{ margin: '0 0 0 2px' }}
											className={classes.title}
										>
											{getAge(usr.dob)}
										</p>
										{chat && <Chat className={classes.userChat} />}
									</div>
								</div>
							);
						})}
					</Wrapper>
				</CardBody>
			</Card>
		</GridItem>
	);
};

export default withApollo(withStyles(CardStyles)(DateView));
