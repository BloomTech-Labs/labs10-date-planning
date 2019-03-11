import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const GET_REMAINING_DATES = gql`
  query getRemainingDates {
    getRemainingDates{
      count
    }
  }
`;

const DatesLeft = ({ currentUser }) => {
  return (
    <Query query={GET_REMAINING_DATES}>
      {
        ({ data: {getRemainingDates} }) => {
          return (
            <div style={{ textAlign: "right" }}>
              {`Dates Remaining: ${getRemainingDates.count} [${currentUser.permissions} subscription]`}
            </div>
          )
        }
      }
    </Query>
  )}

export default DatesLeft;
export { GET_REMAINING_DATES };