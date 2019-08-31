import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'

if (DEBUG) {
  console.log('---DEVELOPMENT ENV---')
} else {
  console.log('---PRODUCTION ENV---')
}

ReactDOM.render(<App/>, document.getElementById('root'))

serviceWorker.register()
