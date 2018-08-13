import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DragBox from './components/DragBox';
import DragBoxSort from './components/DragBoxSort';
// import Draggable from './components/Draggable';// doesn't work

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Drag and Drop Demo (no Redux)</h1>
        </header>
        <p className="App-intro">
        </p>
        <DragBoxSort/>
        <DragBox/>
      </div>
    );
  }
}

export default App;
