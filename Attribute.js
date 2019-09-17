import React, { useState } from 'react';
import GenericComponent from './GenericComponent'

export default function Attribute() {
  const [attrState, setAttrState] = useState({});

  const attrButtonClick = () => {
    console.log("Attribute button clicked")
  }
  const attrInputChange = (event) => {
    console.log("Attribute on change");
    const { name, value } = event.target
    setAttrState({ ...attrState, name: value })
  }
  console.log("ATTR STATE: ", attrState);
  return (
    <div>
      <span>Attribute</span>
      <GenericComponent handleClick={attrButtonClick} handleChange={attrInputChange} />
    </div>
  )
}