import React from 'react'
import PropTypes from 'prop-types'
import { flatten } from 'flat'
import { addLocaleData, IntlProvider } from 'react-intl'
import localeEn from 'react-intl/locale-data/en'
import localePl from 'react-intl/locale-data/pl'
import messagesPl from '~services/translation/pl.json'
import messagesEn from '~services/translation/en.json'

const messages = {
  en: flatten(messagesEn),
  pl: flatten(messagesPl),
}
addLocaleData([...localeEn, ...localePl])

const lang = 'en'

export class IntlWrapper extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.string]),
  }

  render() {
    const { children } = this.props
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        {children}
      </IntlProvider>
    )
  }
}

export default IntlWrapper
