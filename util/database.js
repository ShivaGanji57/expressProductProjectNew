const Sequelize=require('sequelize')

const sequelize=new Sequelize('node-complete','root','asdfghjkl',{dialect:'mysql',host:'localhost'})

module.exports=sequelize