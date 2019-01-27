import React, { Component } from 'react'
import withMuiTheme from '~theme/withMuiTheme'

export class App extends Component {
  render() {
    return (
      <div>
        My react app.
      </div>
    )
  }
}

export default withMuiTheme(App, true)
