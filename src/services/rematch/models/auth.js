import Immutable from 'immutable'

export const initialState = {
  authorizedUser: Immutable.Map({}),
  isAuthed: false,
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
        authorizedUser,
        isAuthorized,
      }
    },
  },
  state: initialState,
}

export default auth
