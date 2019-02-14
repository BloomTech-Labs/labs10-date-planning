import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Mutation } from 'react-apollo';
import Router from 'next/router';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';

const CREATE_ORDER_MUTATION = gql`
  mutation createOrder($token: String!, $subscription: Permission!) {
    createOrder(token: $token, subscription: $subscription) {
      id
      total
    }
  }
`;

const Billing = props => {
  const onToken = async (res, subsType, createOrder) => {
    await createOrder({
      variables: {
        token: res.id,
        subscription: subsType
      },
    }).catch(err => {
      alert(err.message);
    });
    Router.push({
      pathname: '/'
    });
    return null
  }

  return (
    <Mutation mutation={CREATE_ORDER_MUTATION}>
      {
        (createOrder) => {
          return (
            <StripeCheckout
              amount={props.subsType === 'MONTHLY' ? 999 : 2999}
              name="Up4"
              description="One year subscription"
              stripeKey="pk_test_XMzhj8sz1Y1twtwn6sLLpy9C"
              currency="USD"
              email={"boom@boom.com"}
              token={res => onToken(res, props.subsType, createOrder)}
            >
              <div>
                {props.children}
              </div>
            </StripeCheckout>
          );
        }
      }
    </Mutation>
  );
};

export default Billing;
