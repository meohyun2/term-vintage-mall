import React from 'react';
import styled from 'styled-components';
import {Route,useRouteMatch, Switch} from 'react-router-dom';
import Amekaji from '../shop/AmekajiPage';
import AmericanVintage from '../shop/AmericanVintagePage';
import Funk from '../shop/FunkPage';
import Grunge from '../shop/GrungePage';
import OldSchool from '../shop/OldschoolPage';
import Workwear from '../shop/WorkwearPage';
import Hippy from '../shop/HippyPage';
import MyPage from '../content/navBar/MyPage';
import MyTransaction from '../content/navBar/MyTransaction';
import Board from '../content/navBar/Board';
import ItemInfo from '../shop/shopping/iteminfo';
import BoardInfo from './navBar/board/boardInfo';

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
        </Route>
        <Route path={`/grunge/:page`}>
          <Grunge/>
        </Route>
        <Route path={`/oldSchool/:page`}>
          <OldSchool/>
        </Route>
        <Route path={`/amekaji/:page`}>
          <Amekaji/>
        </Route>
        <Route path={`/americanVintage/:page`}>
          <AmericanVintage/>
        </Route>
        <Route path={`/workwear/:page`}>
          <Workwear/>
        </Route>
        <Route path={`/funk/:page`}>
          <Funk/>
        </Route>
        <Route path={`/hippy/:page`}>
          <Hippy/>
        </Route>
        <Route path={`/item/:index`}>
          <ItemInfo/>
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
        <Route path={`/boardInfo/:board_idx`}>
          <BoardInfo/>
        </Route>
      </Switch>
    </ContentDiv>
  )
}

export default Content;