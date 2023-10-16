const path = require('path');

const express = require('express');

const expenseController = require('../controllers/expense');

const router = express.Router();

router.post('/expense',expenseController.postExpense)
router.get('/expense',expenseController.getExpense)
router.delete('/expense/:id',expenseController.deleteExpense)

module.exports=router