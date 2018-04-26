import React, { Component } from 'react'
import Select from 'react-select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

class EloSelect extends Component {
  onChange = (event) => {
    // this.props.onChange(value)
    if (this.props.input.onChange && event != null) {
      // To be aligned with how redux-form publishes its CHANGE action payload. The event received is an object with 2 keys: "value" and "label"
      this.props.input.onChange(event.value);
    } else {
      // Clear the input field
      this.props.input.onChange(null)
    }
  }


  render() {
    const { input, value, onBlur, ...props } = this.props
    return (
      <Select
        options={options}
        isMulti
        value={input.value || ''}
        onChange={this.onChange}
        onBlur={() => input.onBlur(input.value)}
        // {...input}
        // {...props}
      />
    )
  }
}

export default EloSelect
