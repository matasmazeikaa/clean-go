import React from "react"

const AddSubtract = ({ onSubtract, onAdd, value }) => {
  return (
    <div>
      <button onClick={onSubtract}>Subtract</button>
      <div>{value}</div>
      <button onClick={onAdd}>Add</button>
    </div>
  )
}

export default AddSubtract
