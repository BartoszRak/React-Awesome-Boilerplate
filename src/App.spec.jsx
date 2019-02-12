import React from 'react'
import { shallow } from 'enzyme'
import { mocks } from './utils/tests'

import { App } from './App'

jest.mock('./layout', () => 'LayoutMock')

const initComponent = overrides => {
  const mockProps = {
    classes: mocks.classesProxy,
    language: 'en',
  }
  const mockMethods = {
    clearAuthState: jest.fn(),
    updateAuthState: jest.fn(),
  }
  const wrapper = shallow(<App {...mockProps} {...mockMethods} {...overrides} />)
  return { mockProps, wrapper }
}

describe('global: App', () => {
  it('renders without crashing', () => {
    const { wrapper } = initComponent()
    expect(wrapper).toBeTruthy()
  })
})
