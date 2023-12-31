// const fs = require('fs');
// const path = require('path');

// const p = path.join(
//   path.dirname(process.mainModule.filename),
//   'data',
//   'cart.json'
// );

// module.exports=class Cart{

//     static addProduct(id,productPtice){
//         fs.readFile(p,(err,data)=>{
//             let cart={products:[],totalPrice:0}
//             if(!err){
//                 cart=JSON.parse(data)
//             }
//             const existingProductIndex=cart.products.findIndex(prod=>prod.id==id)
//             const existingProduct=cart.products[existingProductIndex]
//             let updatedProduct;
//             if(existingProduct){
//                 updatedProduct={...existingProduct}
//                 updatedProduct.qty=updatedProduct.qty+1
//                 cart.products[existingProductIndex]=updatedProduct
//             }
//             else{
//                 updatedProduct={id:id,qty:1}
//                 cart.products=[...cart.products,updatedProduct]
//             }
//             cart.totalPrice=cart.totalPrice+ +productPtice
//             fs.writeFile(p,JSON.stringify(cart),(err)=>{
//                 console.log(err)
//             })
//         })
//     }
// }
const Sequelize=require('sequelize')
const sequelize=require('../util/database')

const Cart=sequelize.define('cart',{
  id:{
    type:Sequelize.INTEGER,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true
  }
})

module.exports=Cart