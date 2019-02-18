import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const GET_USER_ORDER = gql`
  query getUserOrder($userId: String!) {
    getUserOrder(userId: $userId) {
      id
      total
      charge
      createdAt
      subscription
    }
  }
`;

const TransactionList = ({ currentUser }) => {
  return (
    <div>
      Transaction List: {currentUser.firstName}
      <Query query={GET_USER_ORDER} variables={{
        userId: currentUser.id
      }}>
        {({ data: { getUserOrder } }) => {
          return <div>
            {getUserOrder.map(order => (
              <div key={order.id}>
                {
                  order.charge.startsWith('https:') &&
                  <a href={order.charge} target='_blank'>receipt</a>
                }
                {
                  ` - ${order.createdAt} ${order.subscription} - Subscription`
                }
              </div>
            ))}
          </div>
        }}
      </Query>
    </div>
  )
};

export default TransactionList;
export { GET_USER_ORDER };