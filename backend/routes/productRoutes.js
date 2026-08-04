const express = require('express');
const { addProduct, listProducts, removeProduct, getSingleProduct } = require('../controllers/productController.js');
const productRoutes = express.Router();
const upload = require('../middleware/multer.js')
const adminAuth = require('../middleware/adminAuth.js')

productRoutes.post('/add',adminAuth,upload.fields([{name:'image1', maxCount:1}, {name:'image2', maxCount:1}, {name:'image3',maxCount:1}, {name:'image4',maxCount:1}]),addProduct)
productRoutes.get('/list',listProducts)
productRoutes.post('/remove',adminAuth,removeProduct)
productRoutes.post('/single',getSingleProduct)

module.exports = productRoutes;