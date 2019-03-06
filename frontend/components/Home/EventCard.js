import React, { useState, useEffect, useRef } from 'react';
import { Mutation } from 'react-apollo';
import moment from 'moment';
import NProgress from 'nprogress';
import { useMutation } from 'react-apollo-hooks';

//query& M
import { CURRENT_USER_QUERY } from '../Queries/User';
import { ADD_EVENT_MUTATION } from '../Mutations/addEvent';
import { DELETE_EVENT_MUTATION } from '../Mutations/updateUser';

//MUI
import { ChevronLeft, Favorite, ChatBubble } from '@material-ui/icons';
//import Favorite from "@material-ui/icons/Favorite";
//import Chat from "@material-ui/icons/ChatBubble";
import Flip from '@material-ui/icons/RotateRight';
import Flipper from '@material-ui/icons/SubdirectoryArrowRightRounded';
import Flopper from '@material-ui/icons/SubdirectoryArrowLeftRounded';
import { IconButton, Typography, Avatar, Button } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';

//Images
import Arrow from '../../static/img/up4Arrow.png';

//Components
import UserModel from './UserModal';
//import InfoModal from "./InfoModal";
import Up4 from './UpFor';

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
import '../../styles/Home/Event.scss';
import '../../styles/Home/EventModal.scss';

const Event = ({ event, classes, user, refetch, setRotate }) => {
	const deleteEvent = useMutation(DELETE_EVENT_MUTATION, {
		variables: { id: event.id },
	});

	//const [modal, showModal] = useState(false);
	//const [rotate, setRotate] = useState("");
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
		<div ref={divEl} className={`${classes.front} ${classes.eventBorder}`}>
			{event.image_url && (
				<CardHeader style={{ position: 'relative' }} image>
					<a href='#' onClick={e => e.preventDefault()}>
						<img
							style={{ border: '1px solid #cabac8' }}
							ref={imgEl}
							src={event.image_url}
							alt='...'
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
						onError={() => NProgress.done()}
						onCompleted={async () => {
							await refetch();
						}}
					>
						{(addEvent, { error, loading, called, data }) => {
							if (error) console.log(error);
							if (called) NProgress.start();

							return (
								<div
									className={
										isSaved ? `${classes.up4} ${classes.up4Saved}` : classes.up4
									}
								>
									<a href='#' onClick={e => e.preventDefault()}>
										{isSaved ? (
											<img className={classes.arrow} src={Arrow} />
										) : (
											<Up4
												handleClick={e => handleClick(e, addEvent)}
												justFour
											/>
										)}
									</a>
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
				<CardFooter style={{ display: 'flex', justifyContent: 'space-between' }}>
					<div style={{ display: 'flex' }}>
						{event.attending.map(usr => (
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
					<div onClick={() => setRotate(classes.activateRotate)} className={classes.flip}>
						<Flipper className={classes.flipper} style={{ fontSize: '36px' }} />
					</div>
				</CardFooter>
			) : (
				''
			)}

			{/* <EventModal modal={modal} showModal={showModal} event={event} /> */}
		</div>
	);
};

export default withStyles(CardStyles)(Event);
{
	/* <GridContainer
            style={{
              height: "auto",
              margin: 0
            }}
            className={`${classes.back} ${classes.eventBorderBack} `}
          >
            <GridItem sm={12} md={12}>
              <CardBody
                style={{
                  height: divEl.current
                    ? `${divEl.current.clientHeight}px`
                    : height
                }}
                className={`${classes.cardBodyRotate} ${
                  classes.cardBodyReverse
                }`}
              >
                <div className={classes.cardBodyRotateHeader}>
                  <IconButton
                    style={{ height: "30px", width: "30px" }}
                    onClick={() => setRotate("")}
                  >
                    <ChevronLeft />
                  </IconButton>
                  <div>
                    <h3 className={classes.cardTitle}>
                      <a href="#" onClick={e => e.preventDefault()}>
                        {event.title}
                      </a>
                    </h3>
                    <h6 style={{ color: "#263238", fontSize: "15px" }}>
                      Showing{" "}
                      {!user.genderPrefs.length ||
                      user.genderPrefs.length === 3 ? (
                        <span className="genderPreference">everyone</span>
                      ) : user.genderPrefs.includes("MALE") ? (
                        user.genderPrefs.includes("FEMALE") ? (
                          <span className="genderPreference">
                            men and women
                          </span>
                        ) : (
                          <span className="genderPreference">men</span>
                        )
                      ) : (
                        <span className="genderPreference">women</span>
                      )}{" "}
                      between the ages of{" "}
                      <span
                        style={{ marginRight: "3px" }}
                        className="agePreference"
                      >
                        {user.minAgePref || "18"}
                      </span>
                      and{" "}
                      <span className="agePreference">
                        {user.maxAgePref || "100"}
                      </span>
                    </h6>
                  </div>
                </div>
                <GridContainer>
                  {event.attending.map(usr => (
                    <GridItem
                      key={usr.id}
                      sm={4}
                      md={4}
                      style={{ padding: "5px", position: "relative" }}
                    >
                      <Favorite className={classes.favorite} />
                      <Chat className={classes.chat} />
                      <div
                        className="user_card"
                        onClick={() => showModal(true)}
                      >
                        <div
                          className={` gradient_border ${
                            classes.userCardBorder
                          }`}
                        >
                          <Avatar
                            src={usr.imageThumbnail}
                            imgProps={{ height: 70, width: 70 }}
                            style={{
                              width: "100%",
                              height: "124px",
                              borderRadius: "6px"
                            }}
                          />
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center"
                            }}
                          >
                            <p style={{ margin: 0 }}>{usr.firstName} | </p>
                            <p style={{ margin: "0 0 0 2px" }}>
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
                <div
                  onClick={() => setRotate("")}
                  className={` ${classes.flip} ${classes.flop}`}
                >
                  <Flopper
                    className={classes.flipper}
                    style={{ fontSize: "36px" }}
                  />
                </div>
              </CardBody>
            </GridItem>
          </GridContainer>
          <InfoModal showModal={showModal} modal={modal} />
        </Card>
      </div>
    </div> */
}
