import React, { useState } from "react";
import moment from "moment";
import { withApollo } from "react-apollo";
import gql from "graphql-tag";
//MUI
import withStyles from "@material-ui/core/styles/withStyles";
//styled components
import Card from "../../styledComponents/Card/Card";
import CardHeader from "../../styledComponents/Card/CardHeader";
import CardFooter from "../../styledComponents/Card/CardFooter";
import CardBody from "../../styledComponents/Card/CardBody";
import GridItem from "../../styledComponents/Grid/GridItem";
import Button from "../../styledComponents/CustomButtons/Button.jsx";
//styles
import CardStyles from "../../static/jss/material-kit-pro-react/views/componentsSections/sectionCards";
import "../../styles/Settings/Date.scss";

const DELETE_EVENT = gql`
  mutation deleteEvent($eventId: String!) {
    deleteEvent(eventId: $eventId) {
      message
    }
  }
`;

const DateView = ({ date, classes, client }) => {
  const deleteEvent = async eventId => {
    let { data, loading } = await client.mutate({
      mutation: DELETE_EVENT,
      variables: {
        eventId
      }
    });
  };
  return (
    <GridItem sm={12} md={6} lg={6}>
      {console.log(date)}
      <Card blog>
        {date.url && (
          <CardHeader image>
            <a href="#pablo" onClick={e => e.preventDefault()}>
              <img src={date.img_url || date.url} alt="..." />
            </a>
            <div
              className={classes.coloredShadow}
              style={{
                backgroundImage: `url(${date.img_url || date.url})`,
                opacity: "1"
              }}
            />
          </CardHeader>
        )}{" "}
        <CardBody style={{ zIndex: "1" }} className={classes.cardBodyRotate}>
		{/* <h6
          style={{
            backgroundImage:
              "linear-gradient(to top, #8ad2ff, #94d5fd, #9fd8fb, #a8daf9, #b2ddf7)",
            color: "#fafafa",
            borderRadius: "6px",
            padding: "10px"
          }}
          className={classes.cardCategory}
        >
          {date.location.venue}
        </h6> */}
          <h4 className={classes.cardTitle}>
            <a
              classes={{ root: "test" }}
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              {date.title}
            </a>
          </h4>
          {date.description && (
            <div className="gradient-box">
              <span>{date.description}</span>
            </div>
          )}
        </CardBody>
        <CardFooter>
          <div
            className={`${classes.stats} ${classes.mlAuto}`}
            style={{ display: "block" }}
          >
            {/* <Schedule /> */}
            {date.times.map(ev => (
              <div key={ev}>{moment(ev).format("dddd, MMMM Do, h:mm a")}</div>
            ))}
          </div>
          <Button
            className="button2"
            onClick={() => {
              deleteEvent(date.id);
            }}
          >
            Delete
          </Button>
        </CardFooter>
      </Card>
    </GridItem>
  );
};

export default withApollo(withStyles(CardStyles)(DateView));
