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
      <Switch>
        <Route exact path={path}>
          여기다가 Content 담아
        </Route>
        <Route path={`/outer`}>
          <Cloth/>
        </Route>
        <Route path={`/top`}>
          <Cloth/>
        </Route>
        <Route path={`/bottom`}>
          <Cloth/>
        </Route>
      </Switch>
    </ContentDiv>
  )
}

export default Content;