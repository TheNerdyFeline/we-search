import React, { Component } from 'react';
import ReactDOM, {render} from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

//import components to render
import Login from './components/Login/Login';
import StudentQuestions from './components/Questions/Student-Questions';
import Signup from './components/Signup/Signup';
import Results from './components/Results/Result';
import NavbarComponent from './components/Nav/NavbarComponent';
import ProfQuestions from './components/Questions/Prof-Questions';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';
import axios from 'axios';

function testGet(){
	axios.get('/api/test').then(response => {
		console.log(response.data)
	})
}

testGet();


const App = () => (
    <Router>
      <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/studentquestions" component={StudentQuestions} />
      <Route path="/profquestions" component={ProfQuestions} />
      <Route path="/signup" component={Signup} />
      <Route path="/results" component={Results} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/login" />
    </Switch>
  </Router>
);

export default App;
