import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import styles from './Authorized.style'

export class Authorized extends React.Component {
  static propTypes = {
    classes: PropTypes.object,
  }

  render() {
    const { classes } = this.props
    return (
      <div>
        Authorized
      </div>
    )
  }
}

export default withStyles(styles)(Authorized)
