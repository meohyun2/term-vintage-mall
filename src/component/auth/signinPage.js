import React,{useState} from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox } from 'antd';
import styled from 'styled-components';
import {LoginFetch} from '../../api/loginFetch';

const LoginFormDiv = styled.div`
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-content:center;
  justify-items:center;
  align-items:center;
  padding : 30px;
`;

const ImgSize = styled.img`
  width:300px;
  height:300px;
`;


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const SignInPage = ({history}) =>{

  const onFinish = async(values) => {
    const loginResult = await LoginFetch(values.username,values.password)
    if(loginResult){
      console.log(loginResult);
      const loginResultJson = await loginResult.json();
      console.log(loginResultJson);
      sessionStorage.setItem("token",loginResultJson.data.token);
      history.push('/');
    }
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <LoginFormDiv>
      <a href="http://localhost:3000/">
        홈으로 가기
      </a>
      <h1>로그인 하세요.</h1>
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </LoginFormDiv>
  );
}

export default SignInPage;