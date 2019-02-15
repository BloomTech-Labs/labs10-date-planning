import React, { Component } from 'react';

import User from '../Queries/User';
import Stripe from './Stripe';

const Billing = () => {
  return (
    <User>
      {
        ({ data: { currentUser } }) => {
          const currentSubs = currentUser.permissions[0];
          return (
            <div>
              <h1>Billing</h1>
              <Stripe subsType='MONTHLY'>
                <button disabled={
                  currentSubs === 'MONTHLY' || currentSubs === 'YEARLY'
                }>
                  Monthly
                </button>
              </Stripe>
              <Stripe subsType='YEARLY'>
                <button disabled={
                  currentSubs === 'YEARLY'
                }>
                  Premium
                </button>
              </Stripe>
            </div>
          );
        }
      }
    </User>
  );
};

export default Billing;
