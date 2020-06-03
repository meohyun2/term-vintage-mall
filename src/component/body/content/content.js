import React from 'react';
import styled from 'styled-components';
import {Route,useRouteMatch, Switch} from 'react-router-dom';
import Outer from '../shop/outer';
import Top from '../shop/top';
import Bottom from '../shop/bottom';
import MyPage from '../content/navBar/MyPage';
import MyTransaction from '../content/navBar/MyTransaction';
import Board from '../content/navBar/Board';

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
          <Outer/>
        </Route>
        <Route path={`/top`}>
          <Top/>
        </Route>
        <Route path={`/bottom`}>
          <Bottom/>
        </Route>
        <Route path={`/mypage`}>
          <MyPage/>
        </Route>
        <Route path={`/board`}>
          <Board/>
        </Route>
        <Route path={`/mytransaction`}>
          <MyTransaction/>
        </Route>
      </Switch>
    </ContentDiv>
  )
}

export default Content;