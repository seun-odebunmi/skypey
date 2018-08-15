import { combineReducers } from 'redux'

import user from './users'
import contacts from './contacts'
import activeUserId from './activeUserId'
import messages from './messages'
import typing from './typing'

export default combineReducers({
  activeUserId,
  user,
  contacts,
  messages,
  typing
})
