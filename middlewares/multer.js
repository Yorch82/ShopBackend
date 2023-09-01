const multer = require('multer');
const path = require('path');

const storageAvatar = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/assets/users/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
    }
});
const uploadUserImages = multer({ storage: storageAvatar });

const storageImg = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/assets/products/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
    }
});
const uploadProductsImages = multer({ storage: storageImg });

module.exports = { uploadUserImages, uploadProductsImages };