import React from 'react'

export default function GenericComponent(props) {
  const handleChange = () => {
    console.log("HANDLE CHANGE CALLED");
  }

  return (
    <div>
      <span>GenericComponent</span>
      <br />
      <input type="text" onChange={props.handleChange} />
      <button onClick={props.handleClick}>
        Button
      </button>
    </div>
  )
}