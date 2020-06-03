import React from 'react';
import styled from 'styled-components';

const MyTransactionDiv = styled.div`
  display : flex;
  justify-content : center;
  align-items : center;
`;

const MyTransaction = () => {
  return(
    <MyTransactionDiv>
      <h2>My Transaction Routing Success</h2>
    </MyTransactionDiv>
  )
}

export default MyTransaction;