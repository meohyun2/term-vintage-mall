import React from 'react';
import Header from './header/header';
import Body from './body/body';
import styled from 'styled-components';
import Footer from './footer/footer';

const Div = styled.div`
  box-container {
    display : flex;
    width : 1200px;
    height : 900px;
    flex-flow : row, wrap;
    justify-content : center;
    align-content : center;
  }
`;


const HomePage = () => {
  return(
    <Div>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </Div>
  )
}

export default HomePage;