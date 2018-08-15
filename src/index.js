import React from 'react'
import ReactDOM from 'react-dom'
import store from './store'
import './index.css'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'

function fancyLog() {
  console.log('%c Rendered with 👉 👉👇', 'background: purple; color: #FFF')
  console.log(store.getState())
}

const render = () => {
  fancyLog()
  return ReactDOM.render(<App />, document.getElementById('root'))
}

render()
store.subscribe(render)
registerServiceWorker()
