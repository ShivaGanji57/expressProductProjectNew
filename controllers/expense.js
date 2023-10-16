const Expense=require('../models/expense');

exports.postExpense=(req,res,next)=>{
    const {expenseAmount,description,category,expenseId}=req.body
    if(expenseId==0){
        Expense.create({
        expenseAmount:expenseAmount,
        expenseDescription:description,
        category:category
      }).then(result=>{
        res.json(result)
      }).catch(err=>console.log(err))
    }
    else{
        Expense.create({
        id:expenseId,
        expenseAmount:expenseAmount,
        expenseDescription:description,
        category:category
      }).then(result=>{
        res.json(result)
      }).catch(err=>console.log(err))
  }
  }
  exports.getExpense=(req,res,next)=>{
    Expense.findAll().then(users=>{
      res.json(users)
    }).catch(err=>console.log(err))
  }
  
  exports.deleteExpense=(req,res,next)=>{
    const id=req.params.id
    Expense.destroy({
      where:{
        id:id
      }
    }).then(result=>{
      
    }).catch(err=>console.log(err))
  }