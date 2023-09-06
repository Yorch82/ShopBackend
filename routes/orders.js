const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/OrderController.js');
const { authentication } = require('../middlewares/authentication');

router.post('/', authentication, OrderController.create);
router.get('/', authentication, OrderController.getAllOrder);
router.get('/orderuser', authentication, OrderController.getOrderUser);
router.post('/create-checkout-session', OrderController.checkout);

module.exports = router;