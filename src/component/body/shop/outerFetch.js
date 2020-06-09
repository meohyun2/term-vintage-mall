const url = `http://localhost:4000/board`;
const fetch = require('node-fetch');

const Fetch = async (url) => {
  fetch(url,{
    method : 'GET',
    headers: {
      'Content-Type': 'application/json',
  },
  })
  .then((response)=>{
    const json = response.json();
    return json;
  })
  .then((res)=>{
    console.log(res);
  });
}

outerFetch(url);