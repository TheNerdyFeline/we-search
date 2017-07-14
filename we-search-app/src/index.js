import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
//import registerServiceWorker from './registerServiceWorker';
import {Router} from 'react-router';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

// import each parent component
import App from './App';
//import Questions from './components/Questions/Questions';
//import Login from './components/Login/Login';



ReactDOM.render(<App />, document.getElementById('root'));
