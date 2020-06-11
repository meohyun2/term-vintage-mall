const fetch = require('node-fetch');

module.exports = {
  getBoardList : () =>{
    const getBoardURL = `http://localhost:4000/board`;
    return fetch(getBoardURL,{
      method:'GET',
      header : {
        'Content-Type' : 'application/json;charset=utf-8'
      }
    })
    .then((res)=>{
      return res;
    })
    .catch((err)=>{
      console.log(err);
    })
  },
  getOneBoard : (board_idx) =>{
    const header = new Headers();
    header.append("Authorization",`Bearer ${sessionStorage.getItem("token")}`);
    const getBoardURL = `http://localhost:4000/board/${board_idx}`;
    return fetch(getBoardURL,{
      method:'GET',
      "headers":header
    })
    .then((res)=>{
      console.log(res);
      return res.json();
    })
    .catch((err)=>{
      console.log(err);
    })
  },
  getCommmentList : async(board_idx) =>{
    const header = new Headers();
    header.append("Authorization",`Bearer ${sessionStorage.getItem("token")}`);
    const getCommentURL = `http://localhost:4000/board/${board_idx}/comment`;
    return fetch(getCommentURL,{
      method:'GET',
      "headers":header
    })
    .then((res)=>{
      console.log(res);
      return res.json();
    })
    .catch((err)=>{
      console.log(err);
    })
  },
  newComment : async(board_to,text,token)=>{
    console.log(board_to,text,token);
    const newCommentURL = `http://localhost:4000/board/newcomment`;
    return await fetch(newCommentURL,{
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json;charset=utf-8'
      },
      body : JSON.stringify(
      {
        board_to:board_to,
        text:text,
        token:token
      }
      )
    })
    .then((res)=>{
      console.log(res);
      return res.json();
    })
    .catch((err)=>{
      console.log(err);
    })
  }
}