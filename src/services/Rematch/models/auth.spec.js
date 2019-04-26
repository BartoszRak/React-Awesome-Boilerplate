import Immutable from 'immutable'
import auth, { initialState } from './auth'

let initialStateMock

describe('auth model: ', () => {
  describe('reducers: ', () => {
    beforeEach(() => {
      initialStateMock = { ...initialState }
    })
    it('clearAuthState', () => {
      const res = auth.reducers.clearAuthState()
      expect(res).toEqual({
        ...initialStateMock,
      })
    })
    it('updateAuthState', () => {
      const res = auth.reducers.updateAuthState(initialStateMock, {
        authorizedUser: { name: 'testName' },
        isAuthorized: true,
      })
      expect(res).toEqual({
        ...initialStateMock,
        authorizedUser: Immutable.fromJS({
          name: 'testName',
        }),
        isAuthorized: true,
      })
    })
  })
})
