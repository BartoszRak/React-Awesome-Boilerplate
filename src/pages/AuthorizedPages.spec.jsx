import React from 'react'
import { shallow } from 'enzyme'

import { AuthorizedPages } from './AuthorizedPages'

jest.mock('./Home', () => 'HomeMock')

const initComponent = overrides => {
  const mockProps = {}
  const mockMethods = {}
  const wrapper = shallow(<AuthorizedPages {...mockProps} {...mockMethods} {...overrides} />)
  return { mockProps, wrapper }
}

describe('AuthorizedPages: ', () => {
  it('renders without crashing', () => {
    const { wrapper } = initComponent()
    expect(wrapper).toBeTruthy()
  })
  it('should render as expected', () => {
    const { wrapper } = initComponent()
    expect(wrapper).toMatchSnapshot()
  })
})
