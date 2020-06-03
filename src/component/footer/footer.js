import React from 'react';
import styled from 'styled-components';

const FooterDiv = styled.div`
  margin-top : auto;
  display : flex;
  align-items : center;
  flex-direction:column;
`;

const Footer = () => {
  return(
    <FooterDiv>
      <h1> 제작 : @Meohyun2 </h1>
      <h2> Minimalized Style Library Shopping Mall </h2>
    </FooterDiv>
  )
}

export default Footer;