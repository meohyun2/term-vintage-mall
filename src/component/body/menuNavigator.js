import React from 'react';
import styled from 'styled-components';
import {Link,useRouteMatch} from 'react-router-dom';

const MenuDiv = styled.div`
  width: 25%;
  float: left;
  padding: 15px;
  border: 1px solid red;
`;

const MenuNavigator = () =>{

  let {path,url} = useRouteMatch();

  return (
    <MenuDiv>
      <ul>
        <li>
          <Link to={`/outer`}>Outer</Link>
        </li>
        <li>
          <Link to={`/top`}>Top</Link>
        </li>
        <li>
          <Link to={`/bottom`}>Bottom</Link>
        </li>
      </ul>
    </MenuDiv>
  )
}

export default MenuNavigator;