import * as React from "react"
import "./Input.scss"
import InputMask from "react-input-mask"

const Input = ({ label, className, classNameContainer, isInputContainer = false, name, value, onChange }) => (
  <div className={`input-container ${classNameContainer} ${isInputContainer && "input-container--phone-input"}`}>
    <label>{label}</label>
    {isInputContainer ? (
      <InputMask mask="99999999" onChange={onChange} value={value}
                 className={`input ${className} ${isInputContainer && "input--phone-input"}`} name={name} />
    ) : <input onChange={onChange} value={value} className={`input ${className} ${isInputContainer && "input&--phone-input"}`} name={name} />}
  </div>
)

export default Input
