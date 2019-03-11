import React, { useEffect, Component } from 'react'

export default ({ subscribeToNewChats, data }) => {
  useEffect(
    () => {
      subscribeToNewChats()
      return () => console.log('unmounting...')
    }, []
  )
  return (
    <div>
      Chat List:
      {
        data.getUserChats && data.getUserChats.map(
          (chat, i) => (
            <div
              key={chat.id}
              style={{
                border: '1px solid black',
                width: '30%'
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
  )
}