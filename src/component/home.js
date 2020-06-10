import React,{useState,useEffect} from 'react';
import Header from './header/header';
import Body from './body/body';
import styled from 'styled-components';
import Footer from './footer/footer';
import {checkAuth} from '../api/authentification';

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

const initialState = {
  tokenFlag : "0" // 로그인 안된 상태
}

const HomePage = () => {

  const [tokenFlag,setTokenFlag]=useState(initialState);

  useEffect(() => {
    const sessionAuth = sessionStorage.getItem("token");
    if(sessionAuth){
      // 토큰이 발급 된 상태
      checkAuth(sessionAuth)
      .then((res)=>{
        res.json()
        .then((jsonRes)=>{
          if(jsonRes.status==200){
            setTokenFlag("1"); // 로그인 완료
          }
        })
      })
    }else{
      //로그인도 안한 상태
    }
  },)
  return(
    <Div>
      <Header authFlag={tokenFlag}></Header>
      <Body></Body>
      <Footer></Footer>
    </Div>
  )
}

export default HomePage;