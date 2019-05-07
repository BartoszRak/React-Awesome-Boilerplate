import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import Home from './Home'

export function AuthorizedPages() {
  return (
    <Switch>
      <Route component={Home} path="/" />
      <Redirect from="*" to="/" />
    </Switch>
  )
}

export default AuthorizedPages
