import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Mutation } from 'react-apollo';
import Router from 'next/router';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';

const CREATE_ORDER_MUTATION = gql`
  mutation createOrder($token: String!) {
    createOrder(token: $token) {
      id
      total
    }
  }
`;

class Billing extends Component {
  onToken = async (res, createOrder) => {
    await createOrder({
      variables: {
        token: res.id,
      },
    }).catch(err => {
      alert(err.message);
    });
    Router.push({
      pathname: '/'
    });
    return null
  }

  render() {
    return (
      <Mutation mutation={CREATE_ORDER_MUTATION}>
        {
          (createOrder) => {
            return (
              <StripeCheckout
                amount={999}
                name="Up4"
                description="One year subscription"
                stripeKey="pk_test_XMzhj8sz1Y1twtwn6sLLpy9C"
                currency="USD"
                email={"boom@boom.com"}
                token={res => this.onToken(res, createOrder)}
              >
                <div>
                  {this.props.children}
                </div>
              </StripeCheckout>
            );
          }
        }
      </Mutation>
    );
  }
};

export default Billing;
