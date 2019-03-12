import React, { useEffect, useState } from 'react'

import ConvoList from './ConvoList'

export default ({
  subscribeToNewChats,
  subscribetoNewMessages,
  data,
  currentUser
}) => {
  const [chatId, setChatId] = useState('')

  useEffect(
    () => {
      subscribeToNewChats()
      subscribetoNewMessages()
      return () => console.log('unmounting...')
    }, []
  )

  const selectedChat = !data.getUserChats
    ? null
    : data.getUserChats.find(chat => chat.id === chatId)

  return (
    <div style={{display: 'flex'}}>
      <div>
        Chat List: {currentUser.firstName}
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
                {`${i} - ${chat.users.find(user => user.id !== currentUser.id).firstName}`}
                <div>
                  {
                    chat.messages[chat.messages.length - 1].text
                  }
                </div>
                <div>
                  {
                    chat.messages.filter(
                      msg => !msg.seen && msg.from.id !== currentUser.id
                    ).length
                  }
                </div>
              </div>
            )
          )
        }
      </div>
      <ConvoList
        chat={selectedChat}
        currentUser={currentUser}
      />
    </div>
  )
}