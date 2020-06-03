import React,{useState,useEffect} from 'react';
import styled from 'styled-components';

const ClothDiv = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`;

const Outer =()=> {

  const [photo,setPhoto] = useState();

  // 차후에 로직 설계 예정
  // useEffect(()=>{
  //   fetch('https://jsonplaceholder.typicode.com/photo/?limit = ', {
  //   method: 'POST',
  //   body: JSON.stringify({
  //     title: 'foo',
  //     body: 'bar',
  //     userId: 1
  //   }),
  //   headers: {
  //     "Content-type": "application/json; charset=UTF-8"
  //   }
  // })
  // }
  // ,[photo]);

  return(
    <ClothDiv>
      <h1>아우터 렌더링 성공</h1>
    </ClothDiv>
  )
}

export default Outer;