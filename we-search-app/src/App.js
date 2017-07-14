import React, { Component } from 'react';
import ReactDOM, {render} from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

//import components to render
import Login from './components/Login/Login';
import Questions from './components/Questions/Student-Questions';
import NavbarComponent from './components/Nav/NavbarComponent';
import ProfQuestions from './components/Questions/Prof-Questions';
import './App.css';

const App = () => (
    <Router>
      <Switch>
	<Route exact path="/" component={Login} />
	<Route path="/questions" component={Questions} />
      </Switch>
  </Router>
);

export default App;
