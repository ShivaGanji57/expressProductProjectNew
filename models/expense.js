const Sequelize=require('sequelize')
const sequelize=require('../util/database')


const Expense=sequelize.define('expense',{
    id:{
      type:Sequelize.INTEGER,
      allowNull:false,
      autoIncrement:true,
      primaryKey:true
    },
    expenseAmount:{
      type:Sequelize.STRING,
      allowNull:false
    },
    expenseDescription:{
      type:Sequelize.STRING,
      allowNull:false
    },
    category:{
      type:Sequelize.STRING,
      allowNull:false
    }
  })

  module.exports=Expense