import React from 'react';
import styled from 'styled-components';

const BoardDiv = styled.div`
  display : flex;
  justify-content : center;
  align-items : center;
`;

const Board = () => {
  return(
    <BoardDiv>
      <h2>Board Routing Success</h2>
    </BoardDiv>
  )
}

export default Board;