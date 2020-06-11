import React from 'react';
import styled from 'styled-components';
import {Link,useRouteMatch} from 'react-router-dom';

const MenuDiv = styled.div`
  width: 25%;
  float: left;
  padding: 15px;
  border: 1px solid red;
`;

const H2 = styled.h2`
  font-size:20pt;
  color:skyblue;
`;
const MenuNavigator = () =>{

  let {path,url} = useRouteMatch();

  return (
    <MenuDiv>
      <ul>
        <li>
          <Link to={`/amekaji/1`}><H2>Amekaji</H2></Link>
        </li>
        <li>
          <Link to={`/americanVintage/1`}><H2>American Vintage</H2></Link>
        </li>
        <li>
          <Link to={`/hippy/1`}><H2>Hippy</H2></Link>
        </li>
        <li>
          <Link to={`/workwear/1`}><H2>Workwear</H2></Link>
        </li>
        <li>
          <Link to={`/oldschool/1`}><H2>Old School</H2></Link>
        </li>
        <li>
          <Link to={`/funk/1`}><H2>Funk</H2></Link>
        </li>
        <li>
          <Link to={`/grunge/1`}><H2>Grunge</H2></Link>
        </li>
      </ul>
    </MenuDiv>
  )
}

export default MenuNavigator;