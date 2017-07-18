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
import ProfQuestions from './components/Questions/Prof-Questions';
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
      <Route path="/questions" component={Questions} />
      <Route path="/profquestions" component={ProfQuestions} />
      <Route path="/studentsignup" component={Studentsignup} />
      <Route path="/professorsignup" component={Professorsignup} />
      <Route path="/results" component={Results} />
    </Switch>
  </Router>
);

export default App;
