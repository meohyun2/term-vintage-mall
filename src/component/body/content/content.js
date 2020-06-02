import React from 'react';
import styled from 'styled-components';
import {Route,useRouteMatch, Switch} from 'react-router-dom';
import Cloth from './cloth';

const ContentDiv = styled.div`
  width: 75%;
  float: left;
  padding: 15px;
  border: 1px solid red;
`;
const Content = () => {

  let {path,url} = useRouteMatch();
  console.log(url);

  return (
    <ContentDiv>
      <Route exact path={path}>
        여기다가 Content 담아
      </Route>
      <Route path={`${path}outer`}>
        <Cloth/>
      </Route>
    </ContentDiv>
  )
}

export default Content;