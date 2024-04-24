const express = require('express');
const { createColor, updateColor, deleteColor, getColor, getAllColor } = require('../controller/colorCTRL');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/create-color',authMiddleware,isAdmin,createColor);
router.put('/update-color/:id',authMiddleware,isAdmin,updateColor);
router.delete('/delete-color/:id',authMiddleware,isAdmin,deleteColor);
router.get('/get-color/:id',getColor);
router.get('/get-all-color',getAllColor);

module.exports = router;