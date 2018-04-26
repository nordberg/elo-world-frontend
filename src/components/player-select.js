import React from 'react'
import { Field } from 'redux-form'
// import Select from 'components/select'
import Select from 'components/rf-react-select'

const EloSelect = ({ name, label, options }) => {
  return (
    <label>
      { label }
      <Field name={name} component={Select} options={options} />
    </label>
  )
}

export default EloSelect
