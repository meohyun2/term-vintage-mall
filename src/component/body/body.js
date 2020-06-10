import React from 'react';
import MenuNavigator from './menuNavigator';
import Content from './content/content';
import styled from 'styled-components';
import { Switch } from 'react-router-dom';

const Div = styled.div`
  height : 700px;
  margin : 1.5em;
  padding : 1.5em;
  display: flex;
  border: 4mm ridge rgba(170, 50, 220, .6);
  flex-direction: row;
  justify-content: center;
  background-color:black;
  color:red;
`;

const Body = () => {
  return(
    <Div>
      <MenuNavigator/>
      <Content></Content>
    </Div>
  )
}

export default Body;