import React, { useState, useEffect, useRef } from "react";
import { withApollo, Mutation } from "react-apollo";
import moment from "moment";
import NProgress from "nprogress";

//query& M
import { CURRENT_USER_QUERY } from "../Queries/User";
import { ALL_EVENTS_QUERY } from "../Queries/AllEvents";
import { ADD_EVENT_MUTATION } from "../Mutations/addEvent";
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
} from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';

//Components
import EventModal from "./EventModal";
import InfoModal from "./InfoModal";
//Styled components
import Card from "../../styledComponents/Card/Card";
import Button from "../../styledComponents/CustomButtons/Button";
import CardHeader from "../../styledComponents/Card/CardHeader";
import CardFooter from "../../styledComponents/Card/CardFooter";
import CardBody from "../../styledComponents/Card/CardBody";
//utils
import getAge from "../../utils/getAge";
//styles
import CardStyles from "../../static/jss/material-kit-pro-react/views/componentsSections/sectionCards";
import "../../styles/Home/Event.scss";

import '../../styles/Home/EventModal.scss';
//import '../../styles/Settings/Date.scss';

function useForceUpdate() {
  const [value, set] = useState(true); //boolean state
  return () => set(!value); // toggle the state to force render
}

const Event = ({ event, classes, user, location }) => {
  const [modal, showModal] = useState({});
  const [rotate, setRotate] = useState("");
  const [height, setHeight] = useState("191px");
  const [val, set] = useState(false);
  const divEl = useRef(null);
  const imgEl = useRef(null);
  let isSaved = user.events.find(e => e.id === event.id);

  useEffect(() => {
    if (divEl) {
      setHeight(`${divEl.current.clientHeight}px`);
    }
  }, [divEl, val]);

  useEffect(() => {
    if (imgEl) {
      if (imgEl.current.clientHeight === 0) {
        set(true);
      }
    }
  }, [imgEl]);

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
    <div style={{ height: "max-content" }}>
      <div
        // onMouseEnter={() => setHeight(`${divEl.current.clientHeight}px`)}
        // onMouseLeave={() => setHeight('191px')}
        style={{ height: height }}
        className={`${classes.rotatingCardContainer} ${
          classes.manualRotate
        } ${rotate}`}
      >
        <Card blog className={`${classes.cardRotate}`}>
          <div ref={divEl} className={`${classes.front}, Event__border`}>
            {event.image_url && (
              <CardHeader image>
                <a href="#" onClick={e => e.preventDefault()}>
                  <img ref={imgEl} src={event.image_url} alt="..." />
                </a>
                <div
                  className={classes.coloredShadow}
                  style={{
                    backgroundImage: `url(${event.image_url})`,
                    opacity: "1"
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
                  description: event.description
                }}
                update={(cache, { data: { addEvent } }) => {
                  const { currentUser } = cache.readQuery({
                    query: CURRENT_USER_QUERY
                  });
                

                  cache.writeQuery({
                    query: CURRENT_USER_QUERY,
                    data: {
                      currentUser: {
                        ...currentUser,
                        events: [...currentUser.events, addEvent]
                      }
                    }
                  });
              
                }}
                refetchQueries={[
                  {
                    query: ALL_EVENTS_QUERY,
                    variables: { location: location }
                  }
                ]}
                awaitRefetchQueries
                onError={() => NProgress.done()}
                onCompleted={() => NProgress.done()}
              >
                {(addEvent, { error, loading, called }) => {
                  if (called) NProgress.start();
                  return (
                    <Typography variant='h4' className={classes.cardTitle}>
                      <a href="#" onClick={e => e.preventDefault()}>
                        {event.title}{" "}
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
              <div className={` Event__location`}>
                {event.location.venue}
              <div
                className={`${classes.stats} ${classes.mlAuto}`}
                style={{ display: "block" }}
              >
                {event.times.length > 2 ? (
                  <div>
                    {moment(event.times[0]).calendar()} -{" "}
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
            <CardFooter>
              {/* {isSaved && <Bookmark className='Event__bookmark' />} */}

              {event.attending.length ? (
                <div
                  style={{ cursor: "pointer", display: "flex" }}
                  onClick={() => setRotate(classes.activateRotate)}
                >
                  <FlashOn />
                  <p>
                    {event.attending.length} users interested in this event.
                  </p>
                </div>
              ) : (
                ""
              )}

            </CardFooter>
            {/* <EventModal modal={modal} showModal={showModal} event={event} /> */}
          </div>
          <div
            style={{ height: "auto", backgroundColor: "white" }}
            className={`${classes.back}  ${classes.wrapperBackground} `}
          >
            <CardBody
              background
              style={{
                // backgroundColor: "white",
                borderRadius: "6px",
                width: "100%",
                maxWidth: "100%",
                height: divEl.current
                  ? `${divEl.current.clientHeight}px`
                  : height,
                display: "block"
              }}
              className={`${classes.cardBodyRotate} `}
            >
              <div style={{ display: "flex" }}>
                <IconButton onClick={() => setRotate("")}>
                  <ChevronLeft />
                </IconButton>
                <h4 className={classes.cardTitle}>
                  <a href="#" onClick={e => e.preventDefault()}>
                    {event.title}
                  </a>
                </h4>
              </div>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>{""}</TableCell>
                    <TableCell>{""}</TableCell>
                    <TableCell>{""}</TableCell>
                    <TableCell>{""}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {event.attending.map(usr => (
                    <TableRow key={usr.id}>
                      <TableCell>
                        <img
                          style={{
                            height: "40px",
                            width: "40px",
                            borderRadius: "50%"
                          }}
                          src={usr.imageThumbnail}
                        />
                      </TableCell>
                      <TableCell>{user.firstName}</TableCell>
                      <TableCell>{getAge(user.dob)}</TableCell>
                      {/* <TableCell>{user.gender.toLowerCase()}</TableCell> */}
                    </TableRow>
                  ))}
                </TableBody>
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
