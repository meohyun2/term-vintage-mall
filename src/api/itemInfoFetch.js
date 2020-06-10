const fetch = require('node-fetch');

module.exports = {
  itemInfoFetch : async(index) =>{
    const itemInfoFetchURL = `http://localhost:4000/shop/item/${index}`;
    return fetch(itemInfoFetchURL,{
      method : 'GET',
      header : {
        'Content-Type' : 'application/json;charset=utf-8'
      },
    })
    .then((res)=>{
      return res;
    })
    .catch((err)=>{
      console.log('error!!\n'+err);
    })
  }
}