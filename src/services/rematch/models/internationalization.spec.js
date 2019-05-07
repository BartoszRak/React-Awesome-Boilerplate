import internationalization, { initialState } from './internationalization'

let initialStateMock

describe('internationalization model: ', () => {
  describe('reducers: ', () => {
    beforeEach(() => {
      initialStateMock = { ...initialState }
    })
    it('resetLanguage', () => {
      const res = internationalization.reducers.resetLanguage({ language: 'testValue' })
      expect(res).toEqual({
        ...initialStateMock,
      })
    })
    it('setLanguage', () => {
      const res = internationalization.reducers.setLanguage(initialStateMock, 'pl')
      expect(res).toEqual({
        ...initialStateMock,
        language: 'pl',
      })
    })
  })
})
