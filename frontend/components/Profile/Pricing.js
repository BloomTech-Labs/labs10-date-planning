import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';
// core components
import { Done, DoneAll, DoneOutline } from '@material-ui/icons';
import GridContainer from '../../styledComponents/Grid/GridContainer.jsx';
import GridItem from '../../styledComponents/Grid/GridItem.jsx';
//mport NavPills from '../../styledComponents/NavPills/NavPills.jsx';
import Card from '../../styledComponents/Card/Card.jsx';
import CardBody from '../../styledComponents/Card/CardBody.jsx';
import Button from '../../styledComponents/CustomButtons/Button.jsx';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

import Stripe from './Stripe';
import '../../styles/Billing/Billing.scss';
import style from '../../static/jss/material-kit-pro-react/views/componentsSections/sectionCards.jsx';
const CANCEL_SUBSCRIPTION = gql`
	mutation cancelSubscription($id: String!) {
		cancelSubscription(id: $id) {
			id
			permissions
		}
	}
`;
const Pricing = ({ classes, currentUser, client }) => {
	const currentSubs = currentUser.permissions;
	const cancelSubscription = async () => {
		let { data, loading } = await client.mutate({
			mutation: CANCEL_SUBSCRIPTION,
			variables: { id: currentUser.id },
		});
	};
	return (
		<div className={classes.container}>
			<GridContainer>
				<GridItem md={4} sm={4}>
					<Card
						plain={currentSubs !== 'FREE'}
						color={currentSubs === 'FREE' && 'primary'}
						pricing
						raised={currentSubs === 'FREE'}
					>
						<CardBody pricing>
							{' '}
							<h6 className={`${classes.cardCategory} ${classes.marginBottom20}`}>
								Basic
							</h6>{' '}
							<div className={classes.icon}>
								<Done
									className={
										currentSubs === 'FREE' ? (
											classes.iconWhite
										) : (
											classes.iconRose
										)
									}
								/>
							</div>
							<h3
								className={`${currentSubs !== 'FREE'
									? classes.cardTitle
									: classes.cardTitleWhite} ${classes.marginTop30}`}
							>
								FREE
							</h3>
							<ul>
								<li>
									Save up to <b>10</b> events at a time
								</li>
								<li>
									Send <b>20</b> messages per week
								</li>
							</ul>
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
								color={currentSubs !== 'FREE' ? 'rose' : 'white'}
								disabled={currentSubs !== 'FREE'}
							>
								{currentSubs === 'FREE' ? 'Current Plan' : 'Choose Plan'}
							</Button>
						</CardBody>
					</Card>
				</GridItem>
				<GridItem sm={4} md={4}>
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
								<DoneAll
									className={
										currentSubs !== 'MONTHLY' ? (
											classes.iconRose
										) : (
											classes.iconWhite
										)
									}
								/>
							</div>
							<h3
								className={`${currentSubs !== 'MONTHLY'
									? classes.cardTitle
									: classes.cardTitleWhite} ${classes.marginTop30}`}
							>
								<small>$</small> 9.99 <small>/month</small>
							</h3>
							<ul>
								<li>
									Save <b>unlimited</b> events
								</li>
								<li>
									Send <b>unlimited</b> messages
								</li>
							</ul>
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
							{currentSubs === 'MONTHLY' ? (
								<Button
									onClick={() => {
										cancelSubscription();
									}}
								>
									Cancel
								</Button>
							) : (
								<Stripe subsType='MONTHLY' user={currentUser}>
									<Button
										round
										color={currentSubs !== 'MONTHLY' ? 'primary' : 'white'}
										disabled={currentSubs === 'MONTHLY'}
									>
										{currentSubs === 'MONTHLY' ? 'Current Plan' : 'Choose Plan'}
									</Button>
								</Stripe>
							)}
						</CardBody>
					</Card>
				</GridItem>
				<GridItem sm={4} md={4} lg={4}>
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
								<DoneOutline
									className={
										currentSubs !== 'YEARLY' ? (
											classes.iconRose
										) : (
											classes.iconWhite
										)
									}
								/>
							</div>
							<h3
								className={`${currentSubs !== 'YEARLY'
									? classes.cardTitle
									: classes.cardTitleWhite} ${classes.marginTop30}`}
							>
								<small>$</small> 29.99 <small>/year</small>
							</h3>
							<ul>
								<li>
									Save <b>unlimited</b> events
								</li>
								<li>
									Send <b>unlimited</b> messages
								</li>
							</ul>
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
							{currentSubs === 'YEARLY' ? (
								<Button
									onClick={() => {
										cancelSubscription();
									}}
								>
									Cancel
								</Button>
							) : (
								<Stripe subsType='YEARLY' user={currentUser}>
									<Button
										round
										color={currentSubs !== 'YEARLY' ? 'primary' : 'white'}
										disabled={currentSubs === 'YEARLY'}
									>
										{currentSubs === 'YEARLY' ? 'Current Plan' : 'Choose Plan'}
									</Button>
								</Stripe>
							)}
						</CardBody>
					</Card>
				</GridItem>
			</GridContainer>
		</div>
	);
};

export default withApollo(withStyles(style)(Pricing));
