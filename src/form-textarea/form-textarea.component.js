import React from 'react'
import './form-element.component.css'

const TextArea = ({ handleChange, value, label, name, required = false }) => (
  <div className="group">
    <label className={`${value.length ? 'shrink' : ''} form-element-label`}>{label}</label>
    <textarea name={name} className="form-element" onChange={handleChange} required={required} />
  </div>
)

export default TextArea
