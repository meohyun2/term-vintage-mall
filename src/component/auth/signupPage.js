import React, { useState } from 'react';
import 'antd/dist/antd.css';
import {
  Form,
  Input,
  Select,
  Checkbox,
  Button,
  AutoComplete,
  DatePicker,
  Radio
} from 'antd';
import styled from 'styled-components';
import {SignUpFetch} from '../../api/signUpFetch';
import { Redirect, Router } from 'react-router-dom';
const moment = require('moment');

const SignUpDiv = styled.div`
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-content:center;
  justify-items:center;
  align-items:center;
  padding : 30px;
`;

const dateFormat = 'YYYY-MM-DD';

const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const SignUpPage = ({history}) => {
  const [form] = Form.useForm();

  const onFinish = async(values) => {
    const signUpResult = await SignUpFetch(values.id,values.password,values.prefix+values.phone,values.sex,values.birthday.format('YYYY[-]MM[-]DD'))
    console.log(signUpResult);
    if(signUpResult){
      console.log('성공!');
      history.push('/');
    }
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="010">010</Option>
      </Select>
    </Form.Item>
  );
  return (
    <SignUpDiv>
      <a href="http://localhost:3000/">
        홈으로 가기
      </a>
      <h1>회원가입 하세요.</h1>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          prefix: '010',
        }}
        scrollToFirstError
      >
        <Form.Item
          name="id"
          label="ID"
          rules={[
            {
              required: true,
              message: 'Please input your id!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="비밀번호"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="비밀번호 확인"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }

                return Promise.reject('The two passwords that you entered do not match!');
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            {
              required: true,
              message: 'Please input your phone number!',
            },
          ]}
        >
          <Input
            addonBefore={prefixSelector}
            style={{
              width: '100%',
            }}
          />
        </Form.Item>

        <Form.Item
          name="birthday"
          label="생일"
        >
         <DatePicker format ={dateFormat}></DatePicker> 
          
        </Form.Item>

        <Form.Item
          name="sex"
          label="성별"
        >
          <Radio.Group>
            <Radio value={1}>남</Radio>
            <Radio value={0}>여</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject('Should accept agreement'),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            개인정보 제공 수집에 동의합니다.
          </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>

    </SignUpDiv>
  );
};

export default SignUpPage;