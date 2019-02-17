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
  return <div>
    <Query query={GET_REMAINING_DATES}>
      {
        ({ data: {getRemainingDates} }) => {
          return (
            <div style={{ textAlign: "right" }}>
              {`Dates Remaining: ${getRemainingDates.count}`}
            </div>
          )
        }
      }
    </Query>
  </div>
}

export default DatesLeft;