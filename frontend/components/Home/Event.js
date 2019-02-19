import React, { useState } from 'react';
import moment from 'moment';
import AddIcon from '@material-ui/icons/Add';
import withStyles from '@material-ui/core/styles/withStyles';

import EventModal from './EventModal';
import Card from '../../styledComponents/Card/Card';
import CardHeader from '../../styledComponents/Card/CardHeader';
import CardFooter from '../../styledComponents/Card/CardFooter';
import CardBody from '../../styledComponents/Card/CardBody';
import Warning from '../../styledComponents/Typography/Warning';

import CardStyles from '../../static/jss/material-kit-pro-react/views/componentsSections/sectionCards';

const Event = ({ event, classes }) => {
<<<<<<< HEAD
  const [modal, showModal] = useState(false);
  return (
    <Card blog onClick={() => showModal(true)}>
      {event.image_url && (
        <CardHeader image>
          <a href="#pablo" onClick={e => e.preventDefault()}>
            <img src={event.image_url} alt="..." />
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
        {/* <h6 style={{border: '2px solid #b2ddf7', borderRadius: '6px', padding: '10px'}}className={classes.cardCategory}>{event.location.venue}</h6> */}
        <h6
          style={{
            backgroundImage:
              "linear-gradient(to right top, #4cb5ae, #58bdbc, #65c6ca, #72ced7, #81d6e3)",
            color: "#fafafa",
            borderRadius: "6px",
            padding: "10px"
          }}
          className={classes.cardCategory}
        >
          {event.location.venue}
        </h6>
        <h4 className={classes.cardTitle}>
          <a href="#pablo" onClick={e => e.preventDefault()}>
            {event.title}
          </a>
        </h4>
      </CardBody>
      <CardFooter>
        <div
          className={`${classes.stats} ${classes.mlAuto}`}
          style={{ display: "block" }}
        >
          {/* <Schedule /> */}
          {event.times.map(ev => (
            <div key={ev}>{moment(ev).format("dddd, MMMM Do, h:mm a")}</div>
          ))}
        </div>
      </CardFooter>
      <EventModal modal={modal} showModal={showModal} id={event.id} />
    </Card>
  );
=======
	const [modal, showModal] = useState(false);
	return (
		<Card blog onClick={() => showModal(true)}>
			{event.image_url && (
				<CardHeader image>
					<a href="#pablo" onClick={e => e.preventDefault()}>
						<img src={event.image_url} alt="..." />
					</a>
					<div
						className={classes.coloredShadow}
						style={{
							backgroundImage: `url(${event.image_url})`,
							opacity: '1'
						}}
					/>
				</CardHeader>
			)}
			<CardBody className={classes.cardBodyRotate}>
				{/* <h6 style={{border: '2px solid #b2ddf7', borderRadius: '6px', padding: '10px'}}className={classes.cardCategory}>{event.location.venue}</h6> */}
				<h6
					style={{
						backgroundColor: '#b2ddf7',
						color: '#fafafa',
						borderRadius: '6px',
						padding: '10px'
					}}
					className={classes.cardCategory}
				>
					{event.location.venue}
				</h6>
				<h4 className={classes.cardTitle}>
					<a href="#pablo" onClick={e => e.preventDefault()}>
						{event.title}
					</a>
				</h4>
			</CardBody>
			<CardFooter>
				<div className={`${classes.stats} ${classes.mlAuto}`} style={{ display: 'block' }}>
					{/* <Schedule /> */}
					{event.times.map((time, i) => (
						<div key={i}>{moment(time).format('ddd, MMMM Do, h:mm a')}</div>
					))}
				</div>
			</CardFooter>
			<EventModal modal={modal} showModal={showModal} id={event.id} />
		</Card>
	);
>>>>>>> 3d3b031c6fe0cb463649225fe66eda08f41c704a
};

export default withStyles(CardStyles)(Event);
