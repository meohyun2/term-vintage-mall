import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import {itemInfoFetch} from '../../../../api/itemInfoFetch';
import { useParams } from 'react-router-dom';
import {Button} from 'antd';
import {makeTransaction} from '../../../../api/transactionFetch';
import {checkAuth} from '../../../../api/authentification';

const Div = styled.div`
  display:flex;
  flex-direction:column;
  height:100%;
  align-items:stretch;
`;

const H1 = styled.h1`color:red;`;
const H2 = styled.h2`color:red;`;

const IMG = styled.img`
  width:400px;
  height:400px;
`;

const ItemInfo = ({history}) =>{

  const [itemInfo,setItemInfo] = useState({});
  const {index} = useParams();

  const _buttonClick_buying = async()=>{
    const token =sessionStorage.getItem("token");
    if(token){
      // fetch
      checkAuth(token)
      .then((res)=>{
        res.json()
        .then((jsonRes)=>{
          if(jsonRes.status==200){
            console.log(jsonRes.data);
            makeTransaction(index,jsonRes.data)
            .then(async(res)=>{
              const mappingJson = await res.json();
              console.log(mappingJson);
            })
            .catch((err)=>{
              console.log(err);
            })
          }
        })
      })
    }else{
      // redirection
      alert('로그인 하세요.');
      history.push('/logIn');
    }
  }

  useEffect(()=>{
    itemInfoFetch(index)
    .then(async(res)=>{
      // 여기서 페이지 맵핑
      const mappingJson = await res.json();
      console.log(mappingJson.data[0]);
      setItemInfo(mappingJson.data[0]);
    })
    .catch((err)=>{
      console.log("왜 에러낫징",err);
    })
  },[])
  return(
    <Div>
      <IMG src="https://raucohouse.com/web/product/tiny/20200605/4144cc282e34669792d65c74569bcd3b.jpg"></IMG>
        <H1>{itemInfo.product_name}</H1>
        <H2>{itemInfo.product_price +' KRW'}</H2>
        <Button type="primary" onClick={_buttonClick_buying}>구입하기</Button>
    </Div>
  )
}

export default ItemInfo;