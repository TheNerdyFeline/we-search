import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import {Router, Route} from 'react-router';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

// import each parent component
import App from './App';
import Questions from './components/Questions/Questions';
import Login from './components/Login/Login';
// ReactDOM.render(
// <BrowserRouter>
// 	<App />
// </BrowserRouter>
// ), document.getElementById('root');
// registerServiceWorker();

module.exports = (
    render(
	<Router>
	  {/* this wraps all routes to include navbar */}
	  <Route Component={App} history={BrowserRouter}>
            <Route path="/" Component={Login}/>
            <Route path="/login" Component={Login}/>
            <Route path="/questions" Component={Questions}/>
	  </Route>
	</Router>,
	document.getElementById('root')
    );
);
//ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
