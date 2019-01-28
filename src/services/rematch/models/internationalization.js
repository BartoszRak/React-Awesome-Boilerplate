export const initialState = {
  language: 'en',
}

const internationalization = {
  effects: {},
  reducers: {
    resetLanguage(state) {
      return {
        ...state,
        language: initialState.language,
      }
    },
    setLanguage(state, payload) {
      return {
        ...state,
        language: payload,
      }
    },
  },
  state: initialState,
}

export default internationalization
