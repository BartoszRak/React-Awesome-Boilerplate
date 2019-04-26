import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import UnauthorizedPages from '~pages/UnauthorizedPages'

import styles from './Unauthorized.style'

export class Unauthorized extends React.Component {
  static propTypes = {
    classes: PropTypes.object,
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        Unauthorized
        <UnauthorizedPages />
      </div>
    )
  }
}

export default withStyles(styles)(Unauthorized)
