import { makeGetProxy } from '~utils/proxies'

// Custom mocks
const definedMocks = {
  withRouter: jest.fn(() => 'withRouterMock'),
  withStyles: jest.fn(() => 'withStylesMock'),
}

// Mock any not defined components automatically: Component -> ComponentMock
module.exports = makeGetProxy(definedMocks, (target, name) => `${name}Mock`)
