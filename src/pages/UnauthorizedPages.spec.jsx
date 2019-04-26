import React from 'react'
import { shallow } from 'enzyme'

import { UnauthorizedPages } from './UnauthorizedPages'

jest.mock('./Login', () => 'LoginMock')

const initComponent = overrides => {
  const mockProps = {}
  const mockMethods = {}
  const wrapper = shallow(<UnauthorizedPages {...mockProps} {...mockMethods} {...overrides} />)
  return { mockProps, wrapper }
}

describe('UnauthorizedPages: ', () => {
  it('renders without crashing', () => {
    const { wrapper } = initComponent()
    expect(wrapper).toBeTruthy()
  })
  it('should render as expected', () => {
    const { wrapper } = initComponent()
    expect(wrapper).toMatchSnapshot()
  })
})
