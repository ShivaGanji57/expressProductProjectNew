const path = require('path');

const express = require('express');

const userController = require('../controllers/user');

const router = express.Router();

router.post('/user',userController.postUser)
router.get('/user',userController.getUser)
router.delete('/user/:id',userController.deleteUser)

module.exports=router