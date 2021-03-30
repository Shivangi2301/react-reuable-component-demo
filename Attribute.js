import React, { useState, useEffect } from "react";
import GenericComponent from "./GenericComponent";

export default function Attribute() {
  const [attrState, setAttrState] = useState({});
  const [shouldShowText, setShouldShowText] = useState(false);

  useEffect(() => {
    setShouldShowText(false);
  }, []);

  const attrButtonClick = () => {
    console.log("Attribute button clicked");
    setShouldShowText(true);
  };
  const attrInputChange = event => {
    console.log("Attribute on change");
    const { name, value } = event.target;
    setAttrState({ ...attrState, name: value });
    setShouldShowText(false);
  };

  console.log("ATTR STATE: ", attrState);

  return (
    <div>
      <h3>Attribute</h3>
      <GenericComponent
        handleClick={attrButtonClick}
        handleChange={attrInputChange}
      />
      <span>{shouldShowText && attrState.name}</span>
    </div>
  );
}
