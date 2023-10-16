const User=require('../models/user');
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