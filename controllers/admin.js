const Product = require('../models/product');
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
  req.user.createProduct({
    title:title,
    imageUrl:imageUrl,
    description:description,
    price:price,
  }).then((result)=>{
    res.redirect('/')
  }).catch(err=>console.log())
};

exports.getEditProduct = (req, res, next) => {
  const editMode=req.query.edit;
  if(!editMode){
    return res.redirect('/')
  }
  const prodId=req.params.productId
  req.user.getProducts({
    where:{
      id:prodId
    }
  }).then((products)=>{
    const product=products[0]
    if(!product){
      return res.redirect('/')
    }
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing:editMode,
      product:product
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
  req.user.getProducts().then(products=>{
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