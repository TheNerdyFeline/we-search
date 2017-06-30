import React, { Component } from 'react';
import Login from './components/Login';
import formInstance from './components/Login/FormInstance';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Login />
        <formInstance />

      </div>  
    );
  }
}

export default App;
