import React from "react";

export default function GenericComponent(props) {
  const handleChange = () => {
    console.log("HANDLE CHANGE CALLED");
  };

  return (
    <div>
      <span>GenericComponent</span>
      <br />
      <input type="text" onChange={props.handleChange} />
      <div style={{ paddingTop: "10px", paddingBottom: "10px" }}>
        <button onClick={props.handleClick}>Show Text</button>
      </div>
    </div>
  );
}
