import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { flatten } from 'flat'
import { addLocaleData, IntlProvider } from 'react-intl'
import localeEn from 'react-intl/locale-data/en'
import localePl from 'react-intl/locale-data/pl'
import messagesPl from '../../services/translation/pl.json'
import messagesEn from '../../services/translation/en.json'

const messages = {
  en: flatten(messagesEn),
  pl: flatten(messagesPl),
}
addLocaleData([...localeEn, ...localePl])

export class IntlWrapper extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.string]),
    language: PropTypes.string,
  }

  render() {
    const { children, language } = this.props
    return (
      <IntlProvider locale={language} messages={messages[language]}>
        {children}
      </IntlProvider>
    )
  }
}

const mapState = ({
  internationalization: {
    language,
  },
}) => ({
  language,
})

export default connect(mapState)(IntlWrapper)
