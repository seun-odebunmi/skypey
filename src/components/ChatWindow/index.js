import React from 'react'
import _ from 'lodash'

import store from '../../store'
import Header from './header'
import Chats from './chats'
import MessageInput from '../../containers/MessageInput'

import './ChatWindow.css'

const ChatWindow = ({ activeUserId }) => {
  const state = store.getState()
  const activeUser = state.contacts[activeUserId]
  const activeMsgs = state.messages[activeUserId]
  const { typing } = state

  return (
    <div className="ChatWindow">
      <Header user={activeUser} />
      <Chats messages={_.values(activeMsgs)} />
      <MessageInput value={typing} />
    </div>
  )
}

export default ChatWindow
