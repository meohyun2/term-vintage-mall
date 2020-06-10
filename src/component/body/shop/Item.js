import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Div = styled.div`
  flex:1 1 0;
  border : 0px solid black;
  margin : 10px;
  display:flex;
  flex-direction:column;
  align-items:center;
  color:red;
`;

const H1 = styled.h1`color:red;`;
const H2 = styled.h2`color:red;`;

const IMG = styled.img`
  width:400px;
  height:400px;
`;

const Item = (props) =>{
  return(
    <Div>
      <Link to={`/item/${props.index}`}>
        <IMG src="https://raucohouse.com/web/product/tiny/20200605/4144cc282e34669792d65c74569bcd3b.jpg"></IMG>
        <H1>{props.name}</H1>
        <H2>{props.price+' KRW'}</H2>
        <H2>{props.type_name}</H2>
      </Link>
    </Div>
  )
}

export default Item;