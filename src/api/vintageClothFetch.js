const fetch = require('node-fetch');

module.exports = {
  getVintageCloth : async(vintageType,page) =>{
    const vintageClothFetchURL = `http://localhost:4000/shop/page/${vintageType}/${page}`;

    return fetch(vintageClothFetchURL,{
      method : 'GET',
      headers : {
        'Content-Type' : 'application/json;charset=utf-8'
      },
    })
    .then((res)=>{
      return res;
    })
    .catch((err)=>{
      console.log('오류\n'+err);
    })
  },
}