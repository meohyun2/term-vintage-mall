import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Switch,Link, Route, BrowserRouter as Router } from "react-router-dom";
import SignInPage from './component/auth/signinPage';
import SignUpPage from './component/auth/signupPage';
import styled from 'styled-components';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path = "/signup" component={SignUpPage}/>
        <Route path = "/signin" component={SignInPage}/>
        <App/>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
