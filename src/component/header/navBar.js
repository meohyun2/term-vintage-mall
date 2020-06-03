import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const NavDiv = styled.div`
 margin : 1.2em;
 display : flex;
 justify-content:center;
`;

const H2 = styled.h2`
  margin: 20px;
`;


const NavBar = () =>{
  return(
    <NavDiv>
      <H2>
        <Link to ="/mypage">My Page</Link>
      </H2>
      <H2>
        <Link to ="/board">Board</Link>
      </H2>
      <H2>
        <Link to ="/mytransaction">My Transaction</Link>
      </H2>
    </NavDiv>
  )
}

export default NavBar;