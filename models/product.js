// const fs = require('fs');
// const path = require('path');

// const p = path.join(
//   path.dirname(process.mainModule.filename),
//   'data',
//   'products.json'
// );
const db=require('../util/database')

// const getProductsFromFile = cb => {
//   fs.readFile(p, (err, fileContent) => {
//     if (err) {
//       cb([]);
//     } else {
//       cb(JSON.parse(fileContent));
//     }
//   });
// };

module.exports = class Product {
  constructor(id,title, imageUrl, description, price) {
    this.id=id
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  // save method to store in file
  // save() {
  //   getProductsFromFile(products => {
  //     if(this.id){
  //       const existingProductIndex=products.findIndex(prod=>prod.id===this.id)
  //       const updatedProducts=[...products]
  //       updatedProducts[existingProductIndex]=this
  //       fs.writeFile(p,JSON.stringify(updatedProducts),err=>{
  //         console.log(err)
  //       })
  //     }
  //     else{
  //       this.id=Math.random().toString()
  //       products.push(this);
  //       fs.writeFile(p, JSON.stringify(products), err => {
  //         console.log(err);
  //       });
  //     }
  //   });
  // }

  // static fetchAll(cb) {
  //   getProductsFromFile(cb);
  // }

  // static findById(id,cb){
  //   getProductsFromFile(products=>{
  //     const product=products.find(p=>p.id===id)
  //     cb(product)
  //   })
  // }

  // static deleteData(id){
  //   getProductsFromFile(products=>{
  //     const productIndex=products.findIndex(prod=>prod.id===id)
  //     products.splice(productIndex,1)
  //     fs.writeFile(p,JSON.stringify(products),err=>{
  //       console.log(err)
  //     })
  //   })
  // }

  save(){
    return db.execute('insert into products(title,price,description,imageUrl) values(?,?,?,?)',
    [this.title,this.price,this.description,this.imageUrl]);
  }
  static fetchAll(){
    return db.execute('select * from products')
  }

  static findById(id){
      return db.execute('select * from products where id=?',[id]);
  }

  static deleteById(id){
    return db.execute('delete from products where id=?',[id])
  }
  updateById(id){
    return db.execute('update products set title=?,price=?,description=?,imageUrl=? where id=?',[this.title,this.price,this.description,this.imageUrl,this.id])
  }
};
