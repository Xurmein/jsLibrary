import React, { Component } from 'react';
import './App.css';
import Main from '../src/components/Main';

let leftIndent = {
  marginLeft: '1em'
}
class App extends Component {
  render() {
    return (
      <div className="App">
      <h1 className="title" style={leftIndent}>Heroes and Villains</h1>
      <Main />
      </div>
    );
  }
}



export default App;