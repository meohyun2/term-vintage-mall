import React from 'react';
import styled from 'styled-components';
import { Switch,Link, Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from './component/home';
import SignInPage from './component/auth/signinPage';
import SignUpPage from './component/auth/signupPage';


function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={HomePage} />
        <Switch>
          <Route exact path = "/signup" component={SignUpPage}/>
          <Route exact path = "/signin" component={SignInPage}/>
          <Route path = "/signin/:id" component = {SignInPage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
