import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Category from './Category';
import Attribute from './Attribute';
import GenericComponent from './GenericComponent';

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
        <hr />       
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
