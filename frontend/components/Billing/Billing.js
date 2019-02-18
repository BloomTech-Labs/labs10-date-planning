import React, { Component } from 'react';

import User from '../Queries/User';
import Stripe from './Stripe';

import CardHeader from '../../styledComponents/Card/CardHeader';

import classNames from 'classnames';
// core components
import GridContainer from '../../styledComponents/Grid/GridContainer.jsx';
import GridItem from '../../styledComponents/Grid/GridItem.jsx';
import Card from '../../styledComponents/Card/Card.jsx';
import CardBody from '../../styledComponents/Card/CardBody.jsx';
import Button from '../../styledComponents/CustomButtons/Button.jsx';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import Weekend from '@material-ui/icons/Weekend';
import img from '../../static/img/bg11.jpg';

import pricingStyle from '../../static/jss/material-kit-pro-react/views/sectionsSections/pricingStyle.jsx';

const Billing = ({ classes, currentUser }) => {
	const currentSubs = currentUser.permissions[0];
	console.log(typeof currentSubs);
	return (
		<div
			className={`${classes.pricing} ${classes.pricing1} ${classes.section}`}
			style={{ backgroundImage: `url(${img})` }}
		>
			<div className={classes.container}>
				<GridContainer>
					<GridItem
						xs={12}
						sm={6}
						md={6}
						className={`${classes.mlAuto} ${classes.mrAuto} ${classes.textCenter}`}
					>
						<h2 className={classes.title}>Pick the best plan for you</h2>
						<h5 className={classes.description}>
							You have Free Unlimited Updates and Premium Support on each package.
						</h5>
						<div className={classes.sectionSpace} />
					</GridItem>
				</GridContainer>
				<GridContainer>
					<GridItem xs={12} sm={6} md={6} lg={4}>
						<Card
							pricing
							raised={currentSubs === 'FREE'}
							plain={currentSubs !== 'FREE'}
						>
							<CardBody pricing plain={currentSubs !== 'FREE'}>
								<h6 className={`${classes.cardCategory} ${classes.marginBottom20}`}>
									Basic
								</h6>
								<div className={classes.icon}>
									<Weekend
										className={
											currentSubs === 'FREE' ? (
												classes.iconRose
											) : (
												classes.iconWhite
											)
										}
									/>
								</div>
								<h3
									className={`${currentSubs === 'FREE'
										? classes.cardTitle
										: classes.cardTitleWhite} ${classes.marginTop30}`}
								>
									FREE
								</h3>
								<p
									className={
										currentSubs === 'FREE' ? (
											classes.cardDescription
										) : (
											classes.cardCategory
										)
									}
								>
									This plan allows you save a maximum of 5 events to your account.
								</p>
								<Button
									round
									color={currentSubs === 'FREE' ? 'rose' : 'white'}
									disabled={currentSubs === 'FREE'}
								>
									{currentSubs === 'FREE' ? 'Current Plan' : 'Choose Plan'}
								</Button>
							</CardBody>
						</Card>
					</GridItem>
					<GridItem xs={12} sm={6} md={6} lg={4}>
						<Card
							pricing
							raised={currentSubs === 'MONTHLY'}
							plain={currentSubs !== 'MONTHLY'}
						>
							<CardBody pricing plain={currentSubs !== 'MONTHLY'}>
								<h6 className={`${classes.cardCategory} ${classes.marginBottom20}`}>
									Month to Month
								</h6>
								<div className={classes.icon}>
									<Weekend
										className={
											currentSubs === 'MONTHLY' ? (
												classes.iconRose
											) : (
												classes.iconWhite
											)
										}
									/>
								</div>
								<h3
									className={`${currentSubs === 'MONTHLY'
										? classes.cardTitle
										: classes.cardTitleWhite} ${classes.marginTop30}`}
								>
									<small>$</small> 9.99 <small>/month</small>
								</h3>
								<p
									className={
										currentSubs === 'MONTHLY' ? (
											classes.cardDescription
										) : (
											classes.cardCategory
										)
									}
								>
									This plan allows you save unlimited dates to your account!
								</p>
								<Stripe subsType='MONTHLY' user={currentUser}>
									<Button
										round
										color={currentSubs === 'MONTHLY' ? 'rose' : 'white'}
										disabled={currentSubs === 'MONTHLY'}
									>
										{currentSubs === 'MONTHLY' ? 'Current Plan' : 'Choose Plan'}
									</Button>
								</Stripe>
							</CardBody>
						</Card>
					</GridItem>
					<GridItem xs={12} sm={6} md={6} lg={4}>
						<Card
							pricing
							raised={currentSubs === 'YEARLY'}
							plain={currentSubs !== 'YEARLY'}
						>
							<CardBody pricing plain={currentSubs !== 'YEARLY'}>
								<h6 className={`${classes.cardCategory} ${classes.marginBottom20}`}>
									Yearly
								</h6>
								<div className={classes.icon}>
									<Weekend
										className={
											currentSubs === 'YEARLY' ? (
												classes.iconRose
											) : (
												classes.iconWhite
											)
										}
									/>
								</div>
								<h3
									className={`${currentSubs === 'YEARLY'
										? classes.cardTitle
										: classes.cardTitleWhite} ${classes.marginTop30}`}
								>
									<small>$</small> 29.99 <small>/year</small>
								</h3>
								<p
									className={
										currentSubs === 'YEARLY' ? (
											classes.cardDescription
										) : (
											classes.cardCategory
										)
									}
								>
									Discounted price when purchasing annual subscription.
								</p>
								<Stripe subsType='YEARLY' user={currentUser}>
									<Button
										round
										color={currentSubs === 'YEARLY' ? 'rose' : 'white'}
										disabled={currentSubs === 'YEARLY'}
									>
										{currentSubs === 'YEARLY' ? 'Current Plan' : 'Choose Plan'}
									</Button>
								</Stripe>
							</CardBody>
						</Card>
					</GridItem>
				</GridContainer>
			</div>
		</div>
	);
};

export default withStyles(pricingStyle)(Billing);
