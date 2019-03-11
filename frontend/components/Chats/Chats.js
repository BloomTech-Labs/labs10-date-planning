import React, { useEffect, useState } from 'react'
import { withApollo, Query, Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const SEND_MESSAGE_MUTATION = gql`
	mutation SEND_MESSAGE_MUTATION($id: String!, $message: String!) {
		sendMessage(id: $id, message: $message) {
			id
			users {
				id
				firstName
			}
			messages {
				id
				text
			}
		}
	}
`;

export default ({
  subscribeToNewChats,
  subscribetoNewMessages,
  data,
  currentUser
}) => {
  const [chatId, setChatId] = useState('')
  const [textToSend, setTextToSend] = useState('')
  useEffect(
    () => {
      subscribeToNewChats()
      subscribetoNewMessages()
      return () => console.log('unmounting...')
    }, []
  )
  const selectedChat = !data.getUserChats
    ? null
    : data.getUserChats.filter(chat => chat.id === chatId)
  
  let friend;
  if (selectedChat.length > 0) {
    friend = selectedChat[0].users.filter(
      user => user.id !== currentUser.id
    )[0];
  }
  
  return (
    <div style={{display: 'flex'}}>
      <div>
        Chat List:
        {
          data.getUserChats && data.getUserChats.map(
            (chat, i) => (
              <div
                key={chat.id}
                style={{
                  border: '1px solid black'
                }}
                onClick={() => {
                  setChatId(chat.id)
                }}
              >
                {`${i} - ${chat.id}`}
                <div>
                  {
                    chat.messages[chat.messages.length - 1].text
                  }
                </div>
              </div>
            )
          )
        }
      </div>
      <div>
        Conversation List:
        {
          selectedChat
          && selectedChat.length > 0
          &&
          selectedChat[0].messages.map(convos => {
              return <div key={convos.id}>
                {convos.text}
              </div>
            })
        }
        {
          selectedChat
          && selectedChat.length > 0
          && <Mutation
            mutation={SEND_MESSAGE_MUTATION}
            variables={{ id: friend.id, message: textToSend }}
          >
            {
              sendMessage => (
                <>
                  <input
                    type="text"
                    value={textToSend}
                    onChange={e => {
                      setTextToSend(e.target.value)
                    }}
                  />
                  <button
                    onClick={() => {
                      sendMessage()
                      setTextToSend('')
                    }}
                  >
                    Send
                  </button>
                </>
              )
            }
          </Mutation>
        }
      </div>
    </div>
  )
}