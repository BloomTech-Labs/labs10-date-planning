import React, { Component } from 'react';
import Stripe from './Stripe';

const Billing = () => {
  return (
    <div>
      <h1>Billing</h1>
      <Stripe subsType='MONTHLY'>
        <button>Monthly</button>
      </Stripe>
      <Stripe subsType='YEARLY'>
        <button>Premium</button>
      </Stripe>
    </div>
  );
};

export default Billing;
