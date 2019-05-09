import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import AuthorizedPages from '~pages/AuthorizedPages'

import styles from './Authorized.style'

export function Authorized({ classes }) {
  return (
    <div className={classes.root}>
      Authorized
      <AuthorizedPages />
    </div>
  )
}

Authorized.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(Authorized)
