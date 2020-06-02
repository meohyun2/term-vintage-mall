import React,{useState} from 'react'
import styled from 'styled-components';
import 'antd/dist/antd.css';
import {Button} from 'antd';
import { Link, Route, BrowserRouter as Router,useRouteMatch,Switch } from "react-router-dom";
import SignInPage from '../../auth/signinPage';

const AutoDiv = styled.div`
  margin-left : auto;
  margin : 10px;
`;

const SignInButton = () =>{
  const {path,url} = useRouteMatch();
  const {userInfo,setUserInfo} = useState();

  return(
    <AutoDiv>
      <Link to="/signin">
        <Button type="primary">로그인</Button>
      </Link>
      <Route path="/signin" component={SignInPage}/>
    </AutoDiv>
  );
}

export default SignInButton;