import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import UnauthorizedPages from '~pages/UnauthorizedPages'

import styles from './Unauthorized.style'

export function Unauthorized({ classes }) {
  return (
    <div className={classes.root}>
      Unauthorized
      <UnauthorizedPages />
    </div>
  )
}

Unauthorized.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(Unauthorized)
