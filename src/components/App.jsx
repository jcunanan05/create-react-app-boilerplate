import React, { Component } from 'react';
import Hello from '../containers/Hello';
import '../styles/app.css';

/* eslint-disable react/prefer-stateless-function */
class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello />
      </div>
    );
  }
}

export default App;
