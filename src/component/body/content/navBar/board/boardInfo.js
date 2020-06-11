import React,{useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import Comment from './comment';
import styled from 'styled-components';
import {getOneBoard} from '../../../../../api/boardFetch';

const Div = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const TextDiv = styled.div`
  border:1px solid red;
`
const H1 = styled.h1`
  font-size:20pt;
  color:red;
  margin : 10px;
`;

const H2 = styled.h2`
  font-size:15px;
  color:red;
  margin : 10px;
`;

const BoardInfo =(props)=>{
  const {board_idx} = useParams();
  const [boardInfo,setBoardInfo] = useState([]); 

  useEffect(() => {
    getOneBoard(board_idx)
    .then((res)=>{
      console.log(res.data[0]);
      setBoardInfo(res.data[0]);
    })
  }, [])
  return(
    <Div>
      <TextDiv><H1>Title : {boardInfo.title}</H1></TextDiv>
      <TextDiv><H2>{boardInfo.text}</H2></TextDiv>
      <Comment board_idx={board_idx}></Comment>
    </Div> 
  )
}

export default BoardInfo;