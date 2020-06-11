import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { List, Avatar } from 'antd';
import {getBoardList} from '../../../../api/boardFetch';
import { Link } from 'react-router-dom';

const BoardDiv = styled.div`
  display : flex;
  justify-content : center;
  align-items : center;
`;

const Div = styled.div`
  height:100%;
  background-color:white;
  border:1px solid red;
  border-radius : 1.5em;
  justify-content:flex-start;
  display:flex;
  flex-direction:column;
  padding:1.1em;
`;

const Board = () => {
  const [boardList,setBoardList] = useState([]);
  useEffect(()=>{
    getBoardList()
    .then(async(res)=>{
      const resJson = await res.json();
      console.log(resJson.data);
      setBoardList(resJson.data);
    })
  },[])
  return(
    <Div>
      <List
      itemLayout="horizontal"
      dataSource={boardList}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title={<Div><Link to ={`/boardInfo/${item.board_idx}`}>{item.title}</Link></Div>}
            description={item.id}
          />
        </List.Item>
      )}
      />
    </Div>
  )
}

export default Board;