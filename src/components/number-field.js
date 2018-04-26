import React from 'react'
import { Field } from 'redux-form'

const NumberField = ({ name, label }) => (
  <label htmlFor={name}>
    { label }
    <Field name={name} component="input" type="number" />
  </label>
)

export default NumberField
