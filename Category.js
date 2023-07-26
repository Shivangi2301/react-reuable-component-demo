import React, { useState, useEffect } from 'react';
import GenericComponent from './GenericComponent';

export default function Category() {
  const [catState, setCatState] = useState({});
  const [shouldShowText, setShouldShowText] = useState(false);

  useEffect(() => {
    setShouldShowText(false);
  }, []);

  const catButtonClicked = () => {
    console.log('Category Button Clicked');
    setShouldShowText(true);
  };

  const catInputChange = (event) => {
    console.log('Category on change');
    const { name, value } = event.target;
    setCatState({ ...catState, name: value });
    setShouldShowText(false);
  };

  return (
    <div>
      <h3>Category</h3>
      <GenericComponent
        handleClick={catButtonClicked}
        handleChange={catInputChange}
      />
      <span>{shouldShowText && catState.name}</span>
    </div>
  );
}
