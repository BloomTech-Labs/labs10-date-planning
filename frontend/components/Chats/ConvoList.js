import React, { useEffect, useState } from 'react'
import { Mutation } from 'react-apollo'
import { useMutation } from 'react-apollo-hooks'
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
        seen
        from {
          id
        }
        updatedAt
			}
		}
	}
`;

const MARK_SEEN = gql`
  mutation MARK_SEEN($chatId: String!) {
    markAllAsSeen(chatId: $chatId) {
      id
    }
  }
`;

export default ({
  chat,
  currentUser
}) => {

  const [textToSend, setTextToSend] = useState('')

  const markAllAsSeen = useMutation(MARK_SEEN)

  useEffect(
    () => {
      const unSeen = chat && chat.messages.filter(msg => !msg.seen && msg.from.id !== currentUser.id)

      if (unSeen && unSeen.length > 0) {
        markAllAsSeen({
          variables: {
            chatId: chat.id
          }
        })
      }
    }
  )

  let friend;
  if (chat) {
    friend = chat.users.find(
      user => user.id !== currentUser.id
    );
  }

  return (
    <div>
      Conversation List:
      {
        chat
        &&
        chat.messages.map(convos => {
          const align = convos.from.id === currentUser.id ? 'right' : 'left'
          const color = convos.from.id === currentUser.id ? 'blue' : 'black'
          console.log(align)
          return <div
            key={convos.id}
            style={{
              textAlign: align,
              color: color
            }}
          >
            {`${convos.text} ${convos.seen ? ' - seen' : ''} - ${convos.seen ? convos.updatedAt : ''}`}
          </div>
        })
      }
      {
        chat
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
  )
}