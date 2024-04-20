const express = require('express');
const { createCategory, updateCategory, deleteCategory, getCategory, getAllCategory } = require('../controller/productCategoryCTRL');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/create-category',authMiddleware,isAdmin,createCategory);
router.put('/update-category/:id',authMiddleware,isAdmin,updateCategory);
router.delete('/delete-category/:id',authMiddleware,isAdmin,deleteCategory);
router.get('/get-category/:id',getCategory);
router.get('/get-all-category',getAllCategory);

module.exports = router;