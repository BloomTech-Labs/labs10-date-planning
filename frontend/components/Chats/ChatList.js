import React, { useState } from 'react'
import { withApollo, Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Chats from './Chats'

const ALL_CHATS_QUERY = gql`
	query {
		getUserChats {
			id
			users {
				id
				firstName
				img {
					id
					default
					img_url
				}
				dob
				gender
			}
			messages {
				id
				text
				createdAt
				seen
				updatedAt
				from {
					id
					firstName
					img {
						id
						default
						img_url
					}
					dob
					gender
				}
				chat {
					id
				}
			}
		}
	}
`;

const MY_CHAT_SUBSCRIPTION = gql`
  subscription (
    $id: String!
  ){
    myChat(id: $id) {
      mutation
      node {
        id
        messages {
          text
        }
      }
    }
  }
`

export default ({ user }) => {
  const friend_id = "cjt338qnr010h0872slg4lwuw"
  const [message, setMessage] = useState('')

  return (
    <Query query={ALL_CHATS_QUERY}>
      {({ loading, error, data, subscribeToMore }) => {
        if (loading || !data.getUserChats) return <div>Fetching</div>
        if (error) return <div>Error</div>
 
        return (
          <Chats 
            subscribeToNewChats={() => {
              console.log('Subsci')
              subscribeToMore({
                document: MY_CHAT_SUBSCRIPTION,
                variables: {
                  id: user.id
                },
                updateQuery: (prev, { subscriptionData }) => {
                  console.log({subscriptionData})
                  if (!subscriptionData) return prev
                  return prev
                }
              })}
            }
          />
        )
      }}
    </Query>
  )
}