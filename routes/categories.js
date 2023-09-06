const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/CategoryController');
const { authentication } = require('../middlewares/authentication');

router.post('/', authentication, CategoryController.create);
router.get('/',CategoryController.getAllCategory);
router.delete('/id/:id', authentication, CategoryController.deleteCategory);
router.put('/id/:id', authentication, CategoryController.updateCategory);
router.get('/id/:id',CategoryController.getCategoryById);

module.exports = router 