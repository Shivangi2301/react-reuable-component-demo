import React, { useState } from 'react';
import GenericComponent from './GenericComponent'

export default function Category() {
  const [catState, setCatState] = useState({});

  const catButtonClicked = () => {
    console.log("Category Button Clicked")
  }
  const catInputChange = (event) => {
    console.log("Category on change");
    const { name, value } = event.target
    setCatState({ ...catState, name: value })
  }
  console.log("CAT STATE: ", catState);

  return (
    <div>
      <span>Category</span>
      <GenericComponent handleClick={catButtonClicked} handleChange={catInputChange} />
    </div>
  )
}