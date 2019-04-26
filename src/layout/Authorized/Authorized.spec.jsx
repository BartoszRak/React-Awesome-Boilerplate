import React from 'react'
import { shallow } from 'enzyme'
import { mocks } from '~utils/tests'

import { Authorized } from './Authorized'

const initComponent = overrides => {
  const mockProps = {
    classes: mocks.classesProxy,
  }
  const mockMethods = {}
  const wrapper = shallow(<Authorized {...mockProps} {...mockMethods} {...overrides} />)
  return { mockProps, wrapper }
}

describe('Authorized: ', () => {
  it('renders without crashing', () => {
    const { wrapper } = initComponent()
    expect(wrapper).toBeTruthy()
  })
  it('should render as expected', () => {
    const { wrapper } = initComponent()
    expect(wrapper).toMatchSnapshot()
  })
})
