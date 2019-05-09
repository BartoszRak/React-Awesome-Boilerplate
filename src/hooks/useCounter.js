import { useState, useCallback } from 'react'

const useCounter = (initialState = {}) => {
  const [counted, setCounted] = useState(initialState.counted || 0)

  const increase = useCallback(() => {
    setCounted(counted + 1)
  }, [counted])

  const decrease = useCallback(() => {
    setCounted(counted - 1)
  }, [counted])

  return {
    increase,
    decrease,
    counted
  }
}

export { useCounter }
