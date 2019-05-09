import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { flatten } from 'flat'
import { addLocaleData, IntlProvider } from 'react-intl'
import localeEn from 'react-intl/locale-data/en'
import localePl from 'react-intl/locale-data/pl'
import messagesPl from '~services/translation/pl.json'
import messagesEn from '~services/translation/en.json'
import firebase from '~services/firebase'
import withMuiTheme from '~theme/withMuiTheme'

import Layout from '~layout'

const messages = {
  en: flatten(messagesEn),
  pl: flatten(messagesPl),
}
addLocaleData([...localeEn, ...localePl])

export function App({ language, clearAuthState, updateAuthState }) {
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        await updateAuthState({
          authorizedUser: user,
          isAuthorized: true,
        })
      } else {
        await clearAuthState()
      }
    })
    return function cleanup() {
      unregisterAuthObserver()
    }
  })

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

App.propTypes = {
  clearAuthState: PropTypes.func,
  language: PropTypes.string,
  updateAuthState: PropTypes.func,
}

const mapDispatch = ({ auth: { clearAuthState, updateAuthState } }) => ({
  clearAuthState,
  updateAuthState,
})

const mapState = ({ internationalization: { language } }) => ({
  language,
})

export default connect(
  mapState,
  mapDispatch
)(withMuiTheme(App, true))
