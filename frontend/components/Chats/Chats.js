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
          (chat, i) => <div key={chat.id}>
            {`${i} - ${chat.id}`}
          </div>
        )
      }
    </div>
  )
}