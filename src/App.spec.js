import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import document from './utils/document'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})
