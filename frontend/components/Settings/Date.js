import React, { useState } from "react";
import { Query } from "react-apollo";
import moment from "moment";
import AddIcon from "@material-ui/icons/Add";

import withStyles from "@material-ui/core/styles/withStyles";

import Card from "../../styledComponents/Card/Card";
import CardHeader from "../../styledComponents/Card/CardHeader";
import CardFooter from "../../styledComponents/Card/CardFooter";
import CardBody from "../../styledComponents/Card/CardBody";
import Warning from "../../styledComponents/Typography/Warning";
import GridItem from "../../styledComponents/Grid/GridItem";

import CardStyles from "../../static/jss/material-kit-pro-react/views/componentsSections/sectionCards";

const DateView = ({ date, classes }) => {
  return (
    <GridItem sm={6} md={4} lg={3}>
      <Card blog>
        {date.url && (
          <CardHeader image>
            <a href="#pablo" onClick={e => e.preventDefault()}>
              <img src={date.url} alt="..." />
            </a>
            <div
              className={classes.coloredShadow}
              style={{
                backgroundImage: `url(${date.url})`,
                opacity: "1"
              }}
            />
          </CardHeader>
        )}{" "}
        <CardBody className={classes.cardBodyRotate}>
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
            {date.location}
          </h6>

          <h4 className={classes.cardTitle}>
            <a classes={{root: 'test'}} href="#pablo" onClick={e => e.preventDefault()}>
              {date.title}
            </a>
          </h4>
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
        </CardFooter>
      </Card>
    </GridItem>
  );
};

export default withStyles(CardStyles)(DateView);
