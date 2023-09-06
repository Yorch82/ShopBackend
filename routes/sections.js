const express = require('express');
const SectionController = require('../controllers/SectionController');
const router = express.Router();
const { authentication } = require('../middlewares/authentication');

router.post('/', authentication, SectionController.create);
router.get('/', SectionController.getAllSections);

module.exports = router;