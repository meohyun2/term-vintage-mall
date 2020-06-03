import React from 'react';
import MenuNavigator from './menuNavigator';
import Content from './content/content';
import styled from 'styled-components';
import { Switch } from 'react-router-dom';

const Div = styled.div`
  width : 1200px;
  height : 900px;
  margin : 1.5em;
  padding : 1.5em;
  display: flex;
  border: 1px solid red;
  flex-direction: row;
  justify-content: center;
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