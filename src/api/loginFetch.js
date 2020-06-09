const fetch = require('node-fetch');
const loginURL = 'http://localhost:4000/user/logIn';

const loginFetch = (id,pwd) => {
  fetch(loginURL,{
    method : 'POST',
    header : {
      'Content-Type' : 'application/json;charset=utf-8'
    },
    body : JSON.stringify(
      
    )
  })
  .then((res)=>{
    return res.json()
  })
  
}

module.exports = loginFetch;