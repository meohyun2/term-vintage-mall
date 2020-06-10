const fetch = require('node-fetch');

module.exports = {
  getMyPage : async()=>{
    const header = new Headers();
    header.append("Authorization",`Bearer ${sessionStorage.getItem("token")}`);
    const getMyPageURL =`http://localhost:4000/mypage`;
    return fetch(getMyPageURL,{
      //bearer token 사용
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

  updateMyPage : async(phone_number,token)=>{
    const getMyPageURL =`http://localhost:4000/mypage`;
    return fetch(getMyPageURL,{
      method: 'POST',
      headers : {
        'Content-Type' : 'application/json;charset=utf-8'
      },
      body : JSON.stringify(
      {
        phone_number:phone_number,
        token : token
      }
      )
    })
    .then((res)=>{
      console.log(res);
      return res.json();
    })
  }
}