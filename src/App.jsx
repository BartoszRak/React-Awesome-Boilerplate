import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl } from 'react-intl'
import withMuiTheme from './theme/withMuiTheme'

export class App extends React.Component {
  static propTypes = {
    intl: PropTypes.object,
  }

  render() {
    const { intl } = this.props
    const { formatMessage } = intl
    return (
      <div>
        My react app with internationalization...
        {formatMessage({ id: 'testArea.label' })}
      </div>
    )
  }
}

export default withMuiTheme(injectIntl(App), true)
