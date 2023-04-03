import React from "react"
import "./Select.scss"

const Select = ({ options, onChange, value, label, name }) => (
  <div className="select-container">
    <label htmlFor={name} className="select-container__label caption">
      {label}
    </label>
    <select
      name={name}
      className="select-container__select"
      onChange={onChange}
      value={value}
    >
      <option hidden selected defaultValue={options[0]} />
      {options.map(option => (
        <option value={option.value}>{option.label}</option>
      ))}
    </select>
  </div>
)

export default Select
