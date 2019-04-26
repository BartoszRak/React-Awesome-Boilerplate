import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import AuthorizedPages from '~pages/AuthorizedPages'

import styles from './Authorized.style'

export class Authorized extends React.Component {
  static propTypes = {
    classes: PropTypes.object,
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        Authorized
        <AuthorizedPages />
      </div>
    )
  }
}

export default withStyles(styles)(Authorized)
