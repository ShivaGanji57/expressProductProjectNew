const Product = require('../models/product');
const User=require('../models/user');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
    editing:false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  Product.create({
    title:title,
    imageUrl:imageUrl,
    description:description,
    price:price
  }).then((result)=>{
    res.redirect('/')
  }).catch(err=>console.log(err))
};

exports.getEditProduct = (req, res, next) => {
  const editMode=req.query.edit;
  if(!editMode){
    return res.redirect('/')
  }
  const prodId=req.params.productId
  Product.findAll({
    where:{
      id:prodId
    }
  }).then((product)=>{
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing:editMode,
      product:product[0]
    });
  }).catch(err=>console.log(err))
};

exports.postEditProduct=(req,res,next)=>{
  const prodId=req.body.productId
  const updatedTitle=req.body.title
  const updatedImageUrl=req.body.imageUrl
  const updatedDescription=req.body.description
  const updatedPrice=req.body.price
  Product.update(
    {
      title:updatedTitle,
      description:updatedDescription,
      price:updatedPrice,
      imageUrl:updatedImageUrl
    },
    {
      where:{
        id:prodId
      }
    }
    ).then(result=>{
    res.redirect('/products')
  }).catch(err=>console.log(err))
}
exports.getProducts = (req, res, next) => {
  Product.findAll().then(products=>{
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  }).catch(err=>console.log(err))
};

exports.postDelete=(req,res,next)=>{
  const prodId=req.params.productId;
  Product.destroy({
    where:{
      id:prodId
    }
  }).then(result=>{
    res.redirect('/products')
  }).catch(err=>console.log(err))
}

exports.postUser=(req,res,next)=>{
  const {userName,userEmail,userNumber,userId}=req.body
  if(userId==0){
    User.create({
      name:userName,
      mobileNumber:userNumber,
      email:userEmail
    }).then(result=>{
      res.json(result)
    }).catch(err=>console.log(err))
  }
  else{
    User.create({
      id:userId,
      name:userName,
      mobileNumber:userNumber,
      email:userEmail
    }).then(result=>{
      res.json(result)
    }).catch(err=>console.log(err))
}
}
exports.getUser=(req,res,next)=>{
  User.findAll().then(users=>{
    res.json(users)
  }).catch(err=>console.log(err))
}

exports.deleteUser=(req,res,next)=>{
  const id=req.params.id
  User.destroy({
    where:{
      id:id
    }
  }).then(result=>{
    
  }).catch(err=>console.log(err))
}