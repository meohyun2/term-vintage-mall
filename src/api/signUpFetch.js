const fetch = require('node-fetch');

module.exports = {
  SignUpFetch : async(id,pwd,phone_number,sex,birthday)=>{

    const signUpURL = `http://localhost:4000/user/signUp`;
    return fetch(signUpURL,{
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json;charset=utf-8'
      }, 
      body : JSON.stringify(
      {
        id:id,
        pwd:pwd,
        phone_number:phone_number,
        sex:sex,
        birthday:birthday
      }
      )
    })
    .then((res)=>{
      console.log(res);
      alert('회원이 되신걸 환영합니다!');
      return res;
    })
    .catch((err)=>{
      console.log("에러발생했네요.. : "+err);
    })
  }
}