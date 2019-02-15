import React, { Component } from "react";

import User from "../Queries/User";
import Stripe from "./Stripe";

import CardHeader from "../../styledComponents/Card/CardHeader";

import classNames from "classnames";
// core components
import GridContainer from "../../styledComponents/Grid/GridContainer.jsx";
import GridItem from "../../styledComponents/Grid/GridItem.jsx";
import Card from "../../styledComponents/Card/Card.jsx";
import CardBody from "../../styledComponents/Card/CardBody.jsx";
import Button from "../../styledComponents/CustomButtons/Button.jsx";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import pricingStyle from "../../static/jss/material-kit-pro-react/views/pricingSections/pricingStyle.jsx";

const Billing = (props) => {
  const { classes } = props;

  return (
    <User>
      {({ data: { currentUser } }) => {
        const currentSubs = currentUser.permissions[0];
        return (
          <div
            className={classes.pricingSection}
          >
            <GridContainer
              style={{
                justifyItems: 'center'
              }}
            >
              <GridItem
                md={6}
                sm={6}
                lg={6}
                className={classNames(
                  classes.mrAuto,
                  classes.mlAuto,
                  classes.textCenter
                )}
              >
                <h2>Pricing</h2>
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem md={4} sm={4}>
                <Card pricing plain>
                  <CardBody pricing>
                  <h6
                      className={classNames(classes.cardCategory, classes.textInfo)}
                    >
                      Montly Basics
                    </h6>
                    <h1 className={classes.cardTitle}>
                      <small>$</small>9.99 <small>/month</small>
                    </h1>
                    <ul>
                      <li>
                        <b>500</b> Project
                      </li>
                      <li>
                        <b>50</b> Team Members
                      </li>
                      <li>
                        <b>125</b> Personal Contacts
                      </li>
                      <li>
                        <b>15.000</b> Messages
                      </li>
                    </ul>
                    {
                      currentSubs === 'FREE' &&
                      <Stripe subsType="MONTHLY" user={currentUser}>
                        <Button
                          color='primary'
                          round>
                          CHECKOUT
                        </Button>
                      </Stripe>
                    }
                    {
                      currentSubs === 'MONTHLY' &&
                      <Button
                        color='rose'
                        disabled
                        round>
                        CURRENT SUBSCRIPTION
                      </Button>
                    }
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem
                md={6}
                sm={6}
                lg={6}
              >
                <Card plain pricing>
                  <CardBody pricing>
                    <h6
                      className={classNames(classes.cardCategory, classes.textInfo)}
                    >
                      Yearly Premium
                    </h6>
                    <h1 className={classes.cardTitle}>
                      <small>$</small>29.99 <small>/year</small>
                    </h1>
                    <ul>
                      <li>
                        <b>1000</b> Project
                      </li>
                      <li>
                        <b>100</b> Team Members
                      </li>
                      <li>
                        <b>550</b> Personal Contacts
                      </li>
                      <li>
                        <b>50.000</b> Messages
                      </li>
                    </ul>
                    {
                      currentSubs !== 'YEARLY' &&
                      <Stripe subsType="YEARLY" user={currentUser}>
                        <Button
                          color='primary'
                          round
                        >
                        CHECKOUT
                        </Button>
                      </Stripe>
                    }
                    {
                      currentSubs === 'YEARLY' &&
                        <Button
													color='rose'
													disabled
                          round
                        >
                        	CURRENT SUBSCRIPTION
                        </Button>
                    }
                  </CardBody>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        );
      }}
    </User>
  );
};

export default withStyles(pricingStyle)(Billing);
