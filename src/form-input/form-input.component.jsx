import React from 'react'
import './form-input.styles.css'

const FormInput = ({ handleChange, label, value, ...otherProps }) => (
  <div className="group-container">
    <input className="form-input-container" onChange={handleChange} {...otherProps} />
    {label ? (
      <label className={`${value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
    ) : null}
  </div>
)

export default FormInput
