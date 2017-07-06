import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import { BrowserRouter } from 'react-router-dom';
//let hashHistory = router.hashHistory;
//let IndexRoute = router.IndexRoute;

// import each parent component
import App from '../App';
import Questions from '../components/Questions/Questions';
import Login from '../components/Login/Login';
// ReactDOM.render(
// <BrowserRouter>
// 	<App />
// </BrowserRouter>
// ), document.getElementById('root');
// registerServiceWorker();

module.exports = (
    render(
	<Router history={hashHistory}>
	  {/* this wraps all routes to include navbar */}
	  <Route Component={App} >
            <IndexRoute path="/" Component={Login}/>
            <Route path="/login" Component={Login}/>
            <Route path="/questions" Component={Questions}/>
	  </Route>
	</Router>,
	document.getElementById('root')
    )
);
