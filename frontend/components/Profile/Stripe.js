import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Mutation } from 'react-apollo';
// import Router from 'next/router';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';

import { CURRENT_USER_QUERY } from '../Queries/User';
import { GET_REMAINING_DATES } from './DatesLeft';
import { INVOICES_LIST } from './TransactionList';

const CREATE_ORDER_MUTATION = gql`
	mutation createOrder($token: String!, $subscription: Permission!) {
		createOrder(token: $token, subscription: $subscription) {
			message
		}
	}
`;

const Billing = props => {
	const onToken = async (res, subsType, createOrder) => {
		await createOrder({
			variables: {
				token: res.id,
				subscription: subsType,
			},
		}).catch(err => {
			alert(err.message);
		});
		//   Router.push({
		//     pathname: '/'
		//   });
		//   return null
	};

	return (
		<Mutation
			mutation={CREATE_ORDER_MUTATION}
			refetchQueries={[
				{ query: CURRENT_USER_QUERY },
				{ query: GET_REMAINING_DATES },
				{
					query: INVOICES_LIST,
					variables: { userStripeCustomerId: props.user.stripeCustomerId },
				},
			]}
		>
			{createOrder => {
				return (
					<StripeCheckout
						amount={props.subsType === 'MONTHLY' ? 499 : 2999}
						name='Up4'
						description='One year subscription'
						stripeKey='pk_test_cwlMq3xP1YmTHtoyiwqKNwYb'
						currency='USD'
						email={props.user.email}
						token={res => onToken(res, props.subsType, createOrder)}
					>
						<div>{props.children}</div>
					</StripeCheckout>
				);
			}}
		</Mutation>
	);
};

export default Billing;
