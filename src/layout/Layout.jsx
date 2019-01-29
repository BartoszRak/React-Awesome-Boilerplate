import React from 'react'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'

import Authorized from './Authorized'
import Unauthorized from './Unauthorized'

import styles from './Layout.style'

export class Layout extends React.Component {
  static propTypes = {
    authorizedUser: ImmutablePropTypes.map,
    classes: PropTypes.object,
    isAuthorized: PropTypes.bool,
  }

  render() {
    const { authorizedUser, classes, isAuthorized } = this.props
    return (
      <div className={classes.root}>
        {(authorizedUser && isAuthorized === true) ? <Authorized /> : <Unauthorized />}
      </div>
    )
  }
}

const mapState = ({
  auth: {
    authorizedUser,
    isAuthorized,
  },
}) => ({
  authorizedUser,
  isAuthorized,
})

export default connect(mapState)(withStyles(styles)(Layout))
