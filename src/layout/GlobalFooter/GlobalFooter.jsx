import React from 'react'
import { useCounter } from '~hooks'
import { Button } from '@material-ui/core'

export function GlobalFooter() {
  const { increase, decrease, counted } = useCounter()

  return (
    <div>
      <p>Here is footer with some content:</p>
      <p>
        Actual value:
        {' '}
        {counted}
      </p>
      <Button onClick={increase}>Increase</Button>
      <Button onClick={decrease}>Decrease</Button>
    </div>
  )
}

export default GlobalFooter
