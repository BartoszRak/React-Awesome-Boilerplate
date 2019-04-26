import { Config } from './Config'

describe('service: Config', () => {
  describe('constructor', () => {
    it('should contain all required keys', () => {
      const config = new Config()
      expect(Object.keys(config)).toEqual(
        expect.arrayContaining(['apiUrl', 'env', 'stage', 'version'])
      )
    })

    describe('getting apiUrl', () => {
      describe('should return real api url if stage is stage or prod', () => {
        let stages = ['stage', 'prod']
        for (let i = 0; i < stages.length; i += 1) {
          process.env.REACT_APP_STAGE = stages[i]
          const config = new Config()
          expect(config.apiUrl).not.toContain('localhost')
        }

        it('should return local api url if stage is not stage or prod', () => {
          stages = ['local', 'dev']
          for (let i = 0; i < stages.length; i += 1) {
            process.env.REACT_APP_STAGE = stages[i]
            const config = new Config()
            expect(config.apiUrl).toContain('localhost')
          }
        })
      })
    })

    describe('getting stage', () => {
      it('should read stage from env', () => {
        process.env.REACT_APP_STAGE = 'some stage'
        const config = new Config()
        expect(config.stage).toBe('some stage')
      })
    })

    describe('getting version', () => {
      it('should read version from env', () => {
        process.env.REACT_APP_VERSION = 'some version'
        const config = new Config()
        expect(config.version).toBe('some version')
      })
    })

    describe('getting env', () => {
      it('should read env from env', () => {
        const config = new Config()
        expect(config.env).toBe('test')
      })
    })
  })
})
