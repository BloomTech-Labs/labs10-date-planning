import React, { useEffect, Component } from 'react'

export default ({ subscribeToNewChats }) => {
  useEffect(
    () => {
      subscribeToNewChats()
      return () => console.log('unmounting...')
    }
  )
  return null
}

// export default class Chats extends Component {
//   componentDidMount() {
//     this.props.subscribeToNewChats();
//   }
// }