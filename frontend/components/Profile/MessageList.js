import React, { useState } from 'react'
import { Query, Mutation } from 'react-apollo'
import { SEND_MESSAGE_MUTATION } from '../Mutations/sendMessage'
import { GET_CONVERSATION_QUERY } from '../Queries/getConvo'
import { ALL_CHATS_QUERY } from '../Queries/AllChats'

const MessageList = ({ selectedChat, currentUser, selectedChatId }) => {
  const [message, setMessage] = useState('')

  let friend;
  if (selectedChat.length > 0) {
    friend = selectedChat[0].users.filter(user => user.id !== currentUser.id)[0]
  }

  if (selectedChat.length === 0) return <div>Select Chat on the left</div>
  return (
		<Query query={GET_CONVERSATION_QUERY} variables={{ id: friend.id }}>
      {
        ({ data: { getConversation } }) => {
          if (!getConversation) return null
          return (
            <div>
              {
                getConversation.messages.map(message => (
                  <div id={message.id}>
                    {`${message.from.id ===  currentUser.id ? 'You: ' : ''}${message.text}`}
                  </div>
                ))
              }
              {
                selectedChatId &&
                <>
                  <input type="text" value={message} onChange={(e) => {
                    setMessage(e.target.value)
                  }} />
                  <Mutation
                    mutation={SEND_MESSAGE_MUTATION}
                    variables={{ id: friend.id, message: message }}
                    awaitRefetchQueries
                    refetchQueries={[
                      { query: GET_CONVERSATION_QUERY, variables: { id: friend.id } },
                      { query: ALL_CHATS_QUERY}
                    ]}
                  >
                    {sendMessage => <button onClick={() => {
                      sendMessage()
                      setMessage('')
                    }}>send</button>}
                  </Mutation>
                </>
              }
            </div>
          )
        }
      }
		</Query>
  )
}

export default MessageList