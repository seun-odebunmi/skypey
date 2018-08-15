import React, { Component } from 'react'
import _ from 'lodash'

import store from '../store'
import Sidebar from '../components/Layout/Sidebar'
import Main from '../components/Layout/Main'
import './App.css'

class App extends Component {
  render() {
    const { contacts, user, activeUserId } = store.getState()

    return (
      <div className="App">
        <Sidebar contacts={_.values(contacts)} />
        <Main user={user} activeUserId={activeUserId} />
      </div>
    )
  }
}

export default App
