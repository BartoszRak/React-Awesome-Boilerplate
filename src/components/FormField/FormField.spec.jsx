import React from 'react'
import { shallow } from 'enzyme'

import { FormField } from './FormField'

const fakeComponent = ({ children }) => children
const initComponent = overrides => {
  const mockProps = {
    fast: false,
  }
  const wrapper = shallow(<FormField
    component={fakeComponent}
    name="my-field"
    {...mockProps}
    {...overrides}
  />)
  return { mockProps, wrapper }
}

describe('<FormField/>', () => {
  describe('rendering', () => {
    it('renders without crashing', () => {
      const { wrapper } = initComponent()
      expect(wrapper).toBeTruthy()
    })
    it('should render as expected', () => {
      const { wrapper } = initComponent()
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('renderInput', () => {
    const { wrapper } = initComponent()
    const instance = wrapper.instance()
    const Input = instance.renderInput

    it('should render provided component and pass input props', () => {
      wrapper.setProps({ helperText: 'Helper Text' })
      const field = { value: 'some value' }
      const form = { errors: {}, touched: {} }
      const renderedInput = shallow(<Input field={field} form={form} />)

      expect(renderedInput.props()).toMatchObject({
        error: false,
        helperText: 'Helper Text',
        value: 'some value',
      })
    })

    it('should render error in helper text only if the field was touched', () => {
      const field = { value: 'some value' }
      let form = { errors: {}, touched: {} }

      let renderedInput = shallow(<Input field={field} form={form} />)
      expect(renderedInput.props()).toMatchObject({
        error: false,
        helperText: 'Helper Text',
      })

      form = {
        errors: { 'my-field': 'Some error' },
        touched: { 'my-field': true },
      }
      renderedInput = shallow(<Input field={field} form={form} />)
      expect(renderedInput.props()).toMatchObject({
        error: true,
        helperText: 'Some error',
      })
    })

    it('should render helper text if it was provided and there are no errors', () => {
      wrapper.setProps({ helperText: 'Helper Text' })
      const field = { value: 'some value' }
      const form = { errors: {}, touched: {} }

      let renderedInput = shallow(<Input field={field} form={form} />)
      expect(renderedInput.props()).toMatchObject({
        error: false,
        helperText: 'Helper Text',
      })

      wrapper.setProps({ helperText: undefined })
      renderedInput = shallow(<Input field={field} form={form} />)
      expect(renderedInput.props()).toMatchObject({
        error: false,
        helperText: '',
      })
    })
  })
})
