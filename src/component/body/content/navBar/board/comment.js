import React,{useEffect,useState} from 'react';
import {getCommmentList,newComment} from '../../../../../api/boardFetch'
import styled from 'styled-components';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

const moment = require('moment');

const Div = styled.div`
  margin-top:auto;
`;

const Comment = (props) =>{
  const[commentItem,setCommentItem] = useState([])

  const [form] = Form.useForm();

  const onFinish = values => {
    //댓글 등록
    const token = sessionStorage.getItem("token");
    if(token){
      newComment(props.board_idx,values.text,token)
      .then((res)=>{
        console.log(res);
      })
    }else{
      alert('로그인하세요!');
    }
  };

  useEffect(()=>{
    getCommmentList(props.board_idx)
    .then(async(res)=>{
      console.log(res.data);
      setCommentItem(res.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])

  return (
    <div>
    <Div>
      <ul>
        {commentItem.map((item,i)=>{
          return(
          <li key={i}>{i+1}.{item.text}<br/>{moment(item.comment_date).format("YYYY[/]MM[/]DD[ ]HH[:]MM")}</li>
          )
        })
        }
      </ul>
    </Div>
    <Div>
      <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>
        <Form.Item
          name="text"
        >
          <Input placeholder="댓글을 입력하세요." />
        </Form.Item>
        <Form.Item shouldUpdate>
          {() => (
            <Button
              type="primary"
              htmlType="submit"
            >
              댓글 등록
            </Button>
          )}
        </Form.Item>
      </Form>
    </Div>
    </div>
  )
}

export default Comment;