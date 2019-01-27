import random from './random'

describe('random utils', () => {
  describe('rand', () => {
    it('generates random number properly', () => {
      for (let i = 0; i < 10; i += 1) {
        expect(random.rand(i, i)).toEqual(i)
      }
    })
    it('generates number in valid range', () => {
      for (let i = 0; i < 100; i += 1) {
        const number = random.rand(1, 9)
        const condition = number > 0 && number < 10
        expect(condition).toEqual(true)
      }
    })
  })
  describe('rand chain', () => {
    it('generates valid length string', () => {
      for (let i = 2; i < 12; i += 1) {
        expect(random.randChain(0, 8, i).length).toEqual(i)
      }
    })
  })
})
