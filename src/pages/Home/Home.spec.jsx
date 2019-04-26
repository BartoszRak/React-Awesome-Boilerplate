import React from 'react'
import { shallow } from 'enzyme'

import { Home } from './Home'

const initComponent = overrides => {
  const mockProps = {}
  const mockMethods = {}
  const wrapper = shallow(<Home {...mockProps} {...mockMethods} {...overrides} />)
  return { mockProps, wrapper }
}

describe('Home: ', () => {
  it('renders without crashing', () => {
    const { wrapper } = initComponent()
    expect(wrapper).toBeTruthy()
  })
  it('should render as expected', () => {
    const { wrapper } = initComponent()
    expect(wrapper).toMatchSnapshot()
  })
})
