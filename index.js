import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";
import Category from "./Category";
import Attribute from "./Attribute";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Category />
        <hr />
        <Attribute />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
