import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const NavDiv = styled.div`
 margin-left : 10em;
 padding:1.5em;
 display : flex;
 justify-content: flex-end;
 align-items:center;
`;

const H2 = styled.h2`
  margin-left: 40px;
  margin-right : 100px;
  font-size:20pt;
  color:white;
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