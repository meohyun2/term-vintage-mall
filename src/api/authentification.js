const fetch = require('node-fetch');

module.exports = {
  checkAuth : async(token) => {
    const authURL = `http://localhost:4000/user/auth`;
    return fetch(authURL,{
      method:'POST',
      headers : {
        'Content-Type' : 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
        token : token
      })
    })
    .then((res)=>{
      console.log(res);
      return res;
    })
    .catch((err)=>{
      console.log(err);
    })
  }
}