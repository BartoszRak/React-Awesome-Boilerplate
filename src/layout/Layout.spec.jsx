import React from 'react'
import { shallow } from 'enzyme'
import { mocks } from '~utils/tests'

import { Layout } from './Layout'

jest.mock('./Unauthorized', () => 'UnauthorizedMock')
jest.mock('./Authorized', () => 'AuthorizedMock')

const initComponent = overrides => {
  const mockProps = {
    classes: mocks.classesProxy,
  }
  const mockMethods = {}
  const wrapper = shallow(<Layout {...mockProps} {...mockMethods} {...overrides} />)
  return { mockProps, wrapper }
}

describe('Layout: ', () => {
  it('renders without crashing', () => {
    const { wrapper } = initComponent()
    expect(wrapper).toBeTruthy()
  })
  it('should render as expected', () => {
    const { wrapper } = initComponent()
    expect(wrapper).toMatchSnapshot()
  })
})
