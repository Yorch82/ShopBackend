const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const { authentication, isAdmin } = require('../middlewares/authentication');
const { uploadUserImages } = require('../middlewares/multer');

router.post('/', UserController.create);
router.get('/confirm/:email', UserController.confirm);
router.post('/login', UserController.login);
router.delete('/logout', authentication, UserController.logout);
router.get('/', UserController.getAll);
router.get('/info', authentication, UserController.getUserInfo);
router.get('/userorder', authentication, isAdmin, UserController.getUserOrderProduct);
router.put("/", authentication, uploadUserImages.single('avatar'), UserController.updateUser);

module.exports = router;