import React from 'react';
import Navbar from './navBar'
import SignInButton from './loginForm/SignInButton';
import SignUpButton from './loginForm/SignUpButton';
import styled from 'styled-components';
import Icon from './icon';

const Div = styled.div`
  margin : 1.5em;
  padding : 1.5em;
  display: flex;
  border: 1px solid red;
`;

const InnerDiv = styled.div`
  margin-left : auto;
  display : flex;
  flex-wrap:wrap;
  justify-content:space-around;
  align-items:center;
`;

const Header = () =>{
  return(
    <Div>
      <Icon/>
      <Navbar/>
      <InnerDiv>
        <SignInButton/>
        <SignUpButton/>
      </InnerDiv>
    </Div>
  );
}

export default Header;