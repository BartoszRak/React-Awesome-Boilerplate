import React from 'react'
import PropTypes from 'prop-types'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { flatten } from 'flat'
import { addLocaleData, IntlProvider } from 'react-intl'
import localeEn from 'react-intl/locale-data/en'
import localePl from 'react-intl/locale-data/pl'
import messagesPl from './services/translation/pl.json'
import messagesEn from './services/translation/en.json'
import firebase from './services/firebase'
import withMuiTheme from './theme/withMuiTheme'

import Layout from './layout'

const messages = {
  en: flatten(messagesEn),
  pl: flatten(messagesPl),
}
addLocaleData([...localeEn, ...localePl])

export class App extends React.Component {
  static propTypes = {
    clearAuthState: PropTypes.func,
    language: PropTypes.string,
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
    const { language } = this.props
    return (
      <BrowserRouter>
        <React.Fragment>
          <IntlProvider locale={language} messages={messages[language]}>
            <Layout />
          </IntlProvider>
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

const mapState = ({
  internationalization: {
    language,
  },
}) => ({
  language,
})

export default connect(mapState, mapDispatch)(withMuiTheme(App, true))
