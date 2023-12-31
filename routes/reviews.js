const express = require('express');
const router = express.Router();
const ReviewController = require('../controllers/ReviewController');
const { authentication,isAdmin } = require('../middlewares/authentication');

router.post('/',authentication, ReviewController.create);
router.get('/', ReviewController.getAllReviews);
router.delete('/:id', authentication, isAdmin, ReviewController.deleteReview);
router.put('/:id', authentication, ReviewController.updateReview);

module.exports = router;