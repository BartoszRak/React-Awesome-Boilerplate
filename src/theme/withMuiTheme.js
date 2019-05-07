import React from 'react'
import { CssBaseline, MuiThemeProvider, createMuiTheme } from '@material-ui/core'
import theme from './theme'

const withMuiTheme = (Component, withBaseline, additionalTheme) => {
  const muiTheme = createMuiTheme(additionalTheme ? { ...theme, ...additionalTheme } : theme)
  if (process.env.NODE_ENV !== 'production') {
    console.info('theme', muiTheme)
  }
  const HOC = componentProps => (
    <MuiThemeProvider theme={muiTheme}>
      {withBaseline && <CssBaseline />}
      <Component {...componentProps} />
    </MuiThemeProvider>
  )

  const name = Component.displayName || Component.name || ''
  HOC.displayName = `withMuiTheme(${name})`

  return HOC
}

export default withMuiTheme
