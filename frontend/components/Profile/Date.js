import React, { useState } from 'react';
import moment from 'moment';
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';
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
import '../../styles/Settings/Date.scss';
import getAge from '../../utils/getAge';
import '../../styles/Home/Event.scss';
import '../../styles/Home/EventModal.scss';
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
	const deleteEvent = async eventId => {
		let { data, loading } = await client.mutate({
			mutation: DELETE_EVENT,
			variables: {
				id: currentUser.id,
				eventId,
			},
		});
	};
	console.log(date);

	return (
		<GridItem sm={12} md={6} lg={6}>
			<Card
				background
				//className={classes.gradientBorder}
				style={{
					backgroundImage: `url(${date.image_url})`,
					border: '4px solid #4cb5ae',
					borderRadius: '11px',
				}}
			>
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
					<GridContainer>
						{date.attending.filter(usr => usr.id !== currentUser.id).map(usr => {
							let chat = currentUser
								? currentUser.chats.find(x => x.users.some(y => y.id === usr.id))
								: false;
							let liked = currentUser
								? currentUser.liked.find(x => x.id === usr.id)
								: false;
							return (
								<GridItem
									key={usr.id}
									sm={4}
									md={4}
									style={{ position: 'relative' }}
								>
									<div
										className='event_user_card'
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
									{/* <UserModel
                        modal={modal}
                        showModal={showModal}
                        potentialMatch={usr}
                      /> */}
								</GridItem>
							);
						})}
					</GridContainer>
					{/* <div className='gradient-box' style={{ width: '100%' }}>
						<span>{date.venue}</span>
						<div
							className={`${classes.stats} ${classes.mlAuto}`}
							style={{ display: 'block' }}
						>
							{date.times.length > 2 ? (
								<div>
									{moment(date.times[0]).calendar()} -{' '}
									{moment(date.times[date.times.length - 1]).calendar()}
								</div>
							) : (
								date.times.map((time, i) => (
									<div key={i}>{moment(time).calendar()}</div>
								))
							)}
						</div>
					</div> */}
				</CardBody>
				{/* <CardFooter>
					<div
						className={`${classes.stats} ${classes.mlAuto}`}
						style={{ display: 'block' }}
					>
						{/* <Schedule /> */}
				{/* {date.times.map(ev => (
							<div key={ev}>{moment(ev).format('dddd, MMMM Do, h:mm a')}</div>
						))}
					</div>
					<Button
						className='button2'
						onClick={() => {
							deleteEvent(date.id);
						}}
					>
						Delete
					</Button>
				</CardFooter> */}{' '}
			</Card>
		</GridItem>
	);
};

export default withApollo(withStyles(CardStyles)(DateView));
