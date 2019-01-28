import React from 'react'
import { shallow } from 'enzyme'

import { App } from './App'

const initComponent = overrides => {
  const mockProps = {
    intl: {
      formatMessage: jest.fn(),
    },
  }
  const mockMethods = {}
  const wrapper = shallow(<App {...mockProps} {...mockMethods} {...overrides} />)
  return { mockProps, wrapper }
}

describe('global: App', () => {
  it('renders without crashing', () => {
    const { wrapper } = initComponent()
    expect(wrapper).toBeTruthy()
  })
})
