import React from 'react';
import styled from 'styled-components';
import { Switch,Link, Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from './component/home';
import SignInPage from './component/auth/signinPage';
import SignUpPage from './component/auth/signupPage';

const Div = styled.div`
  background-color: #FFFFFF;
`;

function App() {
  return (
    <Div className="App">
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </Div>
  );
}

export default App;
