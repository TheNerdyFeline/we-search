import React, { Component } from 'react';
import Login from './components/Login/Login.js';
import Questions from './components/Questions/Questions';
import AppCss from './App.css';
import NavbarComponent from './components/Nav/NavbarComponent';


class App extends Component {
  render() {
    return (
	    <div className="App">
	    <NavbarComponent />
      </div>  
    );
  }
}

export default App;
