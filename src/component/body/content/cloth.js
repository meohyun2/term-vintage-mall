import React from 'react';
import styled from 'styled-components';

const ClothDiv = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`;

const Cloth =()=> {

  return(
    <ClothDiv>
      <h1>컨텐츠 렌더링 성공</h1>
    </ClothDiv>
  )
}

export default Cloth;