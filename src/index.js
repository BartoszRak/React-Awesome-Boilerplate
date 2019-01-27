import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import './index.css'
import document from '~utils/document'
import store from '~services/rematch'

import App from './App'
import IntlWrapper from '~components/IntlWrapper'

ReactDOM.render(
  <Provider store={store}>
    <IntlWrapper>
      <App />
    </IntlWrapper>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
