import React, { useState } from 'react';
import moment from 'moment';
import { withApollo } from 'react-apollo';
import Router from 'next/router';
import gql from 'graphql-tag';

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
// import 'pure-react-carousel/dist/react-carousel.es.css';
//MUI
import { IconButton, Typography, Avatar } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import {
	Favorite,
	ChatBubble as Chat,
	SubdirectoryArrowRightRounded as Flipper,
	SubdirectoryArrowLeftRounded as Flopper,
} from '@material-ui/icons';
//styled components
import Card from '../../styledComponents/Card/Card';
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
			}
		}
	}
`;

const DateView = ({ date, classes, client, currentUser }) => {
	const carousel = date.attending.filter(usr => usr.id !== currentUser.id).length > 3;
	const deleteEvent = async eventId => {
		let { data, loading } = await client.mutate({
			mutation: DELETE_EVENT,
			variables: {
				id: currentUser.id,
				eventId,
			},
		});
	};

	return (
		<GridItem sm={12} md={6} lg={6}>
			<Card
				background
				style={{
					position: 'relative',
					border: '4px solid #4cb5ae',
					borderRadius: '11px',
				}}
			>
				<div
					style={{
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						position: 'absolute',
						filter: 'blur(1px)',
						left: 0,
						right: 0,
						top: 0,
						bottom: 0,
						display: 'block',
						backgroundImage: `url(${date.image_url})`,
					}}
				/>
				<CardBody background style={{ maxWidth: '100%', padding: '10px' }}>
					<h4 className={classes.cardTitleWhite}>{date.title}</h4>
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
					<GridContainer id='users'>
						{date.attending.filter(usr => usr.id !== currentUser.id).map((usr, i) => {
							let chat = currentUser
								? currentUser.chats.find(x => x.users.some(y => y.id === usr.id))
								: false;
							let liked = currentUser
								? currentUser.liked.find(x => x.id === usr.id)
								: false;
							return (
								<GridItem
									key={usr.id}
									sm={carousel ? 12 : 4}
									md={carousel ? 12 : 4}
									style={{ position: 'relative' }}
								>
									<div
										className={classes.eventUserCard}
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
											className={`  ${classes.userCardBorder}`}
											style={{
												border: '1px solid #cabac8',
												borderRadius: '7px',
											}}
										>
											<Avatar
												src={
													usr.img.length ? (
														usr.img.find(img => img.default).img_url
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
												<span style={{ padding: '0 3px' }}>
													&#8226;
												</span>{' '}
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
								</GridItem>
							);
						})}
					</GridContainer>
				</CardBody>
			</Card>
		</GridItem>
	);
};

export default withApollo(withStyles(CardStyles)(DateView));
