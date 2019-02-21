import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import moment from 'moment';

const INVOICES_LIST = gql`
  query invoicesList($userStripeCustomerId: String!) {
    invoicesList(userStripeCustomerId: $userStripeCustomerId) {
      receipt_number,
      amount_due,
      amount_paid,
      date,
      hosted_invoice_url,
      invoice_pdf
    }
  }
`;

const TransactionList = ({ currentUser }) => {
  if (!currentUser.stripeCustomerId) return <div>EMPTY</div>
  return (
    <div>
      Transaction List: {currentUser.firstName}
      <Query query={INVOICES_LIST} variables={{
        userStripeCustomerId: currentUser.stripeCustomerId
      }}>
        {({ data: { invoicesList } }) => {
          return <div>
            {invoicesList && invoicesList.map((invoice,id) => (
              <div key={id}>
                {moment(Date(invoice.date)).format('MM-DD-YY') + ' '}
                <a href={invoice.hosted_invoice_url} target='_blank'>receipt</a>
                <a href={invoice.invoice_pdf}>pdf</a>
              </div>
            ))}
          </div>
        }}
      </Query>
    </div>
  )
};

export default TransactionList;
export { INVOICES_LIST };