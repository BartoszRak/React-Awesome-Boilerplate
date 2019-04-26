import React from 'react'
import { shallow } from 'enzyme'

import { Login } from './Login'

const initComponent = overrides => {
  const mockProps = {}
  const mockMethods = {}
  const wrapper = shallow(<Login {...mockProps} {...mockMethods} {...overrides} />)
  return { mockProps, wrapper }
}

describe('Login: ', () => {
  it('renders without crashing', () => {
    const { wrapper } = initComponent()
    expect(wrapper).toBeTruthy()
  })
  it('should render as expected', () => {
    const { wrapper } = initComponent()
    expect(wrapper).toMatchSnapshot()
  })
})
