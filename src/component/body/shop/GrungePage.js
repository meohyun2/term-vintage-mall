import React, { useEffect,useState } from 'react';
import styled from 'styled-components';
import {getVintageCloth} from '../../../api/vintageClothFetch';
import {useParams} from 'react-router-dom';
import Item from './Item';

const Div = styled.div`
  display:flex;
  flex-direction:column;
  height:100%;
  align-items:stretch;
`;

const H1 = styled.h1`
  color:red;
  flex:1;
`;

const Ul = styled.ul`
  overflow:scroll;
  flex:10;
  display:flex;
  flex-direction:column;
`;

const GrungePage= () =>{
  const {page} = useParams();
  const [grungeItems,setGrungeItems] = useState([]);
  useEffect(()=>{
    getVintageCloth('grunge',page)
    .then(async(res)=>{
      // 여기서 페이지 맵핑
      const mappingJson = await res.json();
      console.log(mappingJson.data);
      setGrungeItems(mappingJson.data);
    })
    .catch((err)=>{
      console.log("왜 에러낫징",err);
    })
  },[])
  return(
    <Div>
      <H1>Grunge</H1>
      <Ul>
        {grungeItems.map((item, i) => {
          return (
              <Item 
                key={i}
                index={item.product_idx}
                name={item.product_name}
                price={item.product_price}
                type_name={item.type_name}/>
              );
        })}
      </Ul>
    </Div>
  )
}

export default GrungePage;