import React,{useState} from 'react'
import styled from 'styled-components';
import 'antd/dist/antd.css';
import {Button} from 'antd';
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import SignUpPage from '../../auth/signupPage';

const AutoDiv = styled.div`
  margin-left : auto;
  margin : 10px;
`;

const SignUpButton = () =>{
  const {userInfo,setUserInfo} = useState();

  return(
    <AutoDiv>
      <Link to="/signUp">
        <Button type = "primary">회원가입</Button>
      </Link>
    </AutoDiv>
  );
}

export default SignUpButton;