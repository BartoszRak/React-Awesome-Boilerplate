import Immutable from 'immutable'

export const initialState = {
  authorizedUser: Immutable.Map({}),
  isAuthorized: false,
}

const auth = {
  effects: {},
  reducers: {
    clearAuthState() {
      return {
        ...initialState,
      }
    },
    updateAuthState(state, payload) {
      const { authorizedUser, isAuthorized } = payload
      return {
        ...state,
        authorizedUser: Immutable.fromJS(authorizedUser),
        isAuthorized,
      }
    },
  },
  state: initialState,
}

export default auth
