const router = require("express").Router();
const {getLabels, createCategories, getCategories, updateTransaction, deleteTransaction, createTransactions, getTransactions} = require('../controllers/budgetController');

router.post('/categories', createCategories);
router.get('/categories', getCategories);
router.post('/transactions', createTransactions);
router.get('/transactions', getTransactions);
router.delete('/transactions/:id', deleteTransaction);
router.patch('/transactions/:id', updateTransaction);
router.get('/labels', getLabels)

module.exports = router;
