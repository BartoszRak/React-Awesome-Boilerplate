import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import styles from './Unauthorized.style'

export class Unauthorized extends React.Component {
  static propTypes = {
    classes: PropTypes.object,
  }

  render() {
    const { classes } = this.props
    return (
      <div>
        Unauthorized
      </div>
    )
  }
}

export default withStyles(styles)(Unauthorized)
