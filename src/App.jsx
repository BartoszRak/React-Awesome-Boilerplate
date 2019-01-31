import React from 'react'
import PropTypes from 'prop-types'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import firebase from './services/firebase'
import withMuiTheme from './theme/withMuiTheme'

import Layout from './layout'

export class App extends React.Component {
  static propTypes = {
    clearAuthState: PropTypes.func,
    updateAuthState: PropTypes.func,
  }

  componentDidMount() {
    const { clearAuthState, updateAuthState } = this.props
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        await updateAuthState({
          authorizedUser: user,
          isAuthorized: true,
        })
      } else {
        await clearAuthState()
      }
    })
  }

  componentWillUnmount() {
    this.unregisterAuthObserver()
  }

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Layout />
          <ToastContainer />
        </React.Fragment>
      </BrowserRouter>
    )
  }
}

const mapDispatch = ({
  auth: {
    clearAuthState,
    updateAuthState,
  },
}) => ({
  clearAuthState,
  updateAuthState,
})

export default connect(null, mapDispatch)(withMuiTheme(App, true))
