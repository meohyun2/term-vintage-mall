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
          <Link to={`/amekaji/1`}>Amekaji</Link>
        </li>
        <li>
          <Link to={`/americanVintage/1`}>American Vintage</Link>
        </li>
        <li>
          <Link to={`/hippy/1`}>Hippy</Link>
        </li>
        <li>
          <Link to={`/workwear/1`}>Workwear</Link>
        </li>
        <li>
          <Link to={`/oldschool/1`}>Old School</Link>
        </li>
        <li>
          <Link to={`/funk/1`}>Funk</Link>
        </li>
        <li>
          <Link to={`/grunge/1`}>Grunge</Link>
        </li>
      </ul>
    </MenuDiv>
  )
}

export default MenuNavigator;