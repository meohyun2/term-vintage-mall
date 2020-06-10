const fetch = require('node-fetch');

module.exports = {
  LoginFetch : async(id,pwd) => {
    const loginURL = 'http://localhost:4000/user/logIn';
    return await fetch(loginURL,{
     method : 'POST',
     headers : {
       'Content-Type' : 'application/json;charset=utf-8'
     },
     body : JSON.stringify(
       {
         id : id,
         pwd : pwd
       }
     )
   })
   .then((res)=>{
     console.log(res);
     alert('로그인 성공하셨어요.');
     return res;
   })
   .catch((err)=>{
     console.log('에러발생햇ㅇ앙 : '+err);
   })
 }

}