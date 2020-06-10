import React,{useEffect,useState} from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox } from 'antd';
import {getMyPage,updateMyPage} from '../../../../api/myInfoFetch';
const moment = require('moment');
const H1 = styled.h1`
  color:white;
  font-size:30pt;
`;

const Div = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
`;

const P = styled.p`
  color:white;
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

const MyPage = () => {
  const onFinish = values => {
    const token = sessionStorage.getItem("token");
    console.log(values,token);
    updateMyPage(values.phone_number,token)
    .then((res)=>{
      console.log(res);
    })
    .catch((err)=>{
      console.log(err);
    })
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  const [userInfo,setUserInfo] = useState({});
  useEffect(()=>{
    getMyPage()
    .then((res)=>{
      console.log(res.data[0]);
      setUserInfo(res.data[0]);
    })
  },[])

  return (
    <Div>

      <Form
        {...layout}
        name="basic"
        onFinish={onFinish}
      >
        <H1>
          {userInfo.id}님의 정보를 수정합니다.
        </H1>
        <Form.Item
          name="phone_number"
          >
          <Input placeholder="바뀔 전화 번호 입력"/>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Div>
  );
};

export default MyPage;