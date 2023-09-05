const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');
const { authentication, isAdmin } = require('../middlewares/authentication');
const { uploadProductsImages } = require('../middlewares/multer');

router.post('/', authentication, isAdmin, uploadProductsImages.single('imageProduct'), ProductController.create);
router.get('/', ProductController.getAllProduct);
router.put('/id/:id',authentication, isAdmin, ProductController.updateProduct);
router.delete('/id/:id',authentication, isAdmin, ProductController.deleteProduct);
router.get('/productcategorysection',ProductController.getProductCategorySection);
router.get('/id/:id',ProductController.getProductById);

module.exports = router;