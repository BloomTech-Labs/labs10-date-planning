import React, { useEffect, useState } from 'react'

export default ({ subscribeToNewChats, subscribetoNewMessages, data }) => {
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
    : data.getUserChats.filter(chat => chat.id === chatId)
  
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
          && selectedChat[0].messages.map(convos => {
              return <div key={convos.id}>
                {convos.text}
              </div>
            })
        }
      </div>
    </div>
  )
}