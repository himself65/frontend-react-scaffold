import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'ant-design-pro/dist/ant-design-pro.css' // 导入 ant-design-pro 的 css
import * as serviceWorker from './serviceWorker'

if (DEBUG) {
  console.log('---DEVELOPMENT ENV---')
} else {
  console.log('---PRODUCTION ENV---')
}

ReactDOM.render(<App/>, document.getElementById('root'))

serviceWorker.register()
