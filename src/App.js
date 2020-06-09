import React from 'react';
import styled from 'styled-components';
import { Switch,Link, Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from './component/home';
import SignInPage from './component/auth/signinPage';
import SignUpPage from './component/auth/signupPage';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
