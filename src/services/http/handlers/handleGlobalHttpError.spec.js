import Rematch from '~services/rematch'
import { toast } from 'react-toastify'

import handleGlobalHttpError from './handleGlobalHttpError'

jest.mock('~services/Rematch', () => ({
  dispatch: {
    messages: {
      showMessage: jest.fn(),
    },
  },
}))

describe('models: helpers', () => {
  describe('handleGlobalHttpError', () => {
    beforeEach(() => {
      toast.error = jest.fn()
    })

    it('should display global message if response was undefined (network error from axios)', () => {
      const error = new Error('Network error')
      error.response = undefined

      handleGlobalHttpError(error)
      expect(toast.error).toBeCalled()
      expect(toast.error).toHaveBeenCalledWith('Network error')
    })

    it('should not display global message otherwise', () => {
      let error = new Error('Network error')
      error.response = { data: 'some response data' }

      handleGlobalHttpError(error)
      expect(toast.error).not.toHaveBeenCalled()

      error = {}
      handleGlobalHttpError(error)
      expect(toast.error).not.toHaveBeenCalled()

      error = undefined
      handleGlobalHttpError(error)
      expect(toast.error).not.toHaveBeenCalled()
    })
  })
})
