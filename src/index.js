import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
//import routes from "./routes/routes";
import {Route} from 'react-router';
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


<BrowserRouter>
  <div>
  {/* this wraps all routes to include navbar */}
  <Route Component={App} >
    <Route path="/" Component={Login}/>
    <Route path="/login" Component={Login}/>
    <Route path="/questions" Component={Questions}/>
  </Route>
  </div>
</BrowserRouter>,
document.getElementById('root');

//ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();
