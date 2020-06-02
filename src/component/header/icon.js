import React from 'react'
import styled from 'styled-components';

const MenuDiv = styled.div`
 flex: none;
 display:flex;
 align-items:center;
`;  

const Icon = () =>{
  return(
    <MenuDiv>
      <a href="http://localhost:3000/">
        <h1>TermVintageMall</h1>
      </a>
    </MenuDiv>
  )
}

export default Icon;