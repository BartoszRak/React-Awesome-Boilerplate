import React from 'react'
import PropTypes from 'prop-types'
import { FastField, Field } from 'formik'

import TextField from '@material-ui/core/TextField'

export class FormField extends React.Component {
  static propTypes = {
    checkable: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    customOnChange: PropTypes.func,
    fast: PropTypes.bool,
    name: PropTypes.string.isRequired,
  }

  static defaultProps = {
    children: () => null,
    component: TextField,
    customOnChange: () => null,
  }

  renderInput = ({ field, form }) => {
    const {
      checkable,
      children,
      component: Component,
      customOnChange,
      fast,
      name,
      ...inputProps
    } = this.props
    const errors = form.touched[name] && form.errors[name]
    const helperText = inputProps.helperText || ''

    if (checkable) {
      inputProps.checked = field.value === true || field.value === 'true'
      inputProps.value = 'checked'
    } else {
      inputProps.error = !!errors
      inputProps.helperText = errors || helperText
    }

    return (
      <Component
        {...field}
        {...inputProps}
        onChange={evtOrValue => {
          if (typeof evtOrValue === 'string') {
            customOnChange(name, evtOrValue)
            field.onChange(name)(evtOrValue)
          } else {
            customOnChange(evtOrValue)
            field.onChange(evtOrValue)
          }
        }}
      >
        {children(field)}
      </Component>
    )
  }

  render() {
    const { fast, name } = this.props

    const FieldComponent = fast ? FastField : Field

    return <FieldComponent name={name} render={this.renderInput} />
  }
}

export default FormField
