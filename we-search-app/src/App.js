import React, { Component } from 'react';
import ReactDOM, {render} from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

//import components to render
import Login from './components/Login/Login';
import Questions from './components/Questions/Questions';
import Studentsignup from './components/Studentsignup/Studentsignup';
import Professorsignup from './components/Professorsignup/Professorsignup';
import Results from './components/Results/Result';
import NavbarComponent from './components/Nav/NavbarComponent';
import './App.css';

const App = () => (
    <Router>
      <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/questions" component={Questions} />
      <Route path="/studentsignup" component={Studentsignup} />
      <Route path="/professorsignup" component={Professorsignup} />
      <Route path="/results" component={Results} />
    </Switch>
  </Router>
);

export default App;
