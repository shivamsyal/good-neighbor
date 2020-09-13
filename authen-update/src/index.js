import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import App_Register from './App_Register';
import Register from './Register';
import Login from './Login';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Logo from './logo.png';

import './index.css'
import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <div>
      <ul class="nav navbar-nav navbar-left">
      <img src={Logo} alt="good neighbor logo"></img>

      </ul>
      <ul class="nav navbar-nav navbar-center">
        <li id="link">
          <Link to="/login">Login</Link>
        </li>
        <li id="link">
          <Link to="/register">Register</Link>
        </li>
      </ul>
      <Route exact path="/" component={App} />
      <Route path="/login" component={App} />
      <Route path="/register" component={App_Register} />
    </div>
  </Router>
)


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
