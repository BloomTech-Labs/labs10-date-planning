import React from 'react';
import User from "../Queries/User";
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const GET_USER_ORDER = gql`
  query getUserOrder($userId: String!) {
    getUserOrder(userId: $userId) {
      id
      total
      createdAt
      subscription
    }
  }
`;

const TransactionList = () => {
  return (
    <User>
      {({ data: { currentUser } }) => {
        return (
          <div>
            Transaction List: {currentUser.firstName}
            <Query query={GET_USER_ORDER} variables={{
              userId: currentUser.id
            }}>
              {({ data: { getUserOrder } }) => {
                return <div>
                  {getUserOrder.map(order => (
                    <div>
                      {
                        `${order.id} ${order.total} ${order.createdAt} ${order.subscription}`
                      }
                    </div>
                  ))}
                </div>
              }}

            </Query>
          </div>
        )
      }}
    </User>
  )
};

export default TransactionList;