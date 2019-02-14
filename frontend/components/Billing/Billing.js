import React, { Component } from 'react';
import Stripe from './Stripe';

class Billing extends React.Component {
  render() {
    return (
      <div>
        <h1>Billing</h1>
        <Stripe>
          <button>CheckOut</button>
        </Stripe>
      </div>
    );
  }
};

export default Billing;
