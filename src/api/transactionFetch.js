const fetch = require('node-fetch');

module.exports={
  makeTransaction : async(product_idx,token) =>{
    const header = new Headers();
    header.append("Authorization",`Bearer ${sessionStorage.getItem("token")}`);
    const makeTransactionURL = `http://localhost:4000/transaction`;
    return fetch(makeTransactionURL,{
      method: 'POST',
      headers : {
        'Content-Type' : 'application/json;charset=utf-8'
      },
      "headers":header,
      body : JSON.stringify(
      {
        product_idx:product_idx,
      }
      )
    })
    .then((res)=>{
      return res;
    })
    .catch((err)=>{
      console.log("err!\n"+err);
    })
  },
  getTransaction : async()=>{
    const header = new Headers();
    header.append("Authorization",`Bearer ${sessionStorage.getItem("token")}`);
    const getMyPageURL =`http://localhost:4000/transaction`;
    return fetch(getMyPageURL,{
      //bearer token 사용
      method:'GET',
      "headers":header
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