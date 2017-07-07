import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
//import routes from "./routes/routes";
import {Router} from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';

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

ReactDOM.render ((
    <BrowserRouter>
      <div>
	{/* this wraps all routes to include navbar */}
	<Route path="/" Component={App}>
	  <Route exact path="/" Component={App}/>
	  <Route path="/login" Component={Login}/>
	  <Route path="/questions" Component={Questions}/>
	  </Route>
      </div>
    </BrowserRouter>), document.getElementById('root')
		);

//ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();
