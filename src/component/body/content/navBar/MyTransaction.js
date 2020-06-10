import React, { useEffect,useState } from 'react';
import styled from 'styled-components';
import {getTransaction} from '../../../../api/transactionFetch';
const moment = require('moment');

const MyTransactionDiv = styled.div`
  display:flex;
  flex-direction:column;
  height:100%;
  align-items:stretch;
`;

const H1 = styled.h1`
  color:white;
  font-size : 25pt;
`;

const Ul = styled.ul`
  flex:1;
  display:flex;
  align-items:center;
  flex-direction:column;
  overflow:scroll;
`;

const MyTransaction = () => {

  const [myTransaction,setMyTransaction] = useState([]);

  useEffect(()=>{
    getTransaction()
    .then(async(res)=>{
      console.log(res);
      const mappingJson = await res.json();
      setMyTransaction(mappingJson.data);
    })
  },[])
  return(
    <MyTransactionDiv>
      <Ul>
      <H1>나의 거래 내역</H1>
        {myTransaction.map((item, i) => {
            return (
                  <li>
                    <H1 key={i}>
                      물품 번호 : {item.product_id}<br/>
                      거래 날짜 : {moment(item.transaction_date).format("YYYY[-]MM[-]DD")}
                    </H1>
                  </li>
                );
          })}
      </Ul>
    </MyTransactionDiv>
  )
}

export default MyTransaction;