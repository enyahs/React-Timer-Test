import React, { Component } from 'react';
import './App.css';

import Timer from './components/timer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Timer count='30'></Timer>
      </div>
    );
  }
}

export default App;
