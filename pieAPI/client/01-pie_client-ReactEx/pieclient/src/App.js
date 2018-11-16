import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Main from './components/layout/Main'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;

//[END]browser (chrome)                                 <<\
//<= index.html (<div id="root"></div>)                    |funnel of
//<= index.js (<App />, document.getElementById('root'))   |React apps
//<= App.js (return JSX) <= components[START]           <</
