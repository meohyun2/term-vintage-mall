import React from 'react'
import styled from 'styled-components';

const MenuDiv = styled.div`
 flex: none;
 margin-top : 0px;
 display:flex;
 align-items:center;
`;

const A = styled.a`
  margin-top : 0 auto;
`;

const H1 = styled.h1`
  color : whitesmoke;
  font-size : 50pt;
  text-shadow :  2px 2px 2px greenyellow;
`;

const Icon = () =>{
  return(
    <MenuDiv>
      <a href="http://localhost:3000/">
        <H1>TermVintageMall</H1>
      </a>
    </MenuDiv>
  )
}

export default Icon;