import React from 'react';
import styled from 'styled-components';

const MyPageDiv = styled.div`
  display : flex;
  justify-content : center;
  align-items : center;
`;

const MyPage = () => {
  return(
    <MyPageDiv>
      <h1>My Page Routing Success</h1>
    </MyPageDiv>
  )
}

export default MyPage;