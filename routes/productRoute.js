const express = require('express');
const { createProduct, getProduct, getAllProducts, updateProduct, deleteProduct } = require('../controller/productCTRL');
const { isAdmin, authMiddleware } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/',authMiddleware,isAdmin,createProduct);
router.get('/get-a-product/:id',getProduct);
router.get('/get-all-products',getAllProducts);
router.put('/update-product/:id',authMiddleware,isAdmin,updateProduct);
router.delete('/delete-product/:id',authMiddleware,isAdmin,deleteProduct);

module.exports = router;