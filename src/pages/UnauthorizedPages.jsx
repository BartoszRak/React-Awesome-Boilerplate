import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import Login from './Login'

export function UnauthorizedPages() {
  return (
    <Switch>
      <Route component={Login} path="/" />
      <Redirect from="*" to="/" />
    </Switch>
  )
}

export default UnauthorizedPages
