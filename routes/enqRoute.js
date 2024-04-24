const express = require('express');
const { createEnquiry, updateEnquiry, deleteEnquiry, getEnquiry, getAllEnquiry } = require('../controller/enqCTRL');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/create-enquiry',createEnquiry);
router.put('/update-enquiry/:id',authMiddleware,isAdmin,updateEnquiry);
router.delete('/delete-enquiry/:id',authMiddleware,isAdmin,deleteEnquiry);
router.get('/get-enquiry/:id',getEnquiry);
router.get('/get-all-enquiry',getAllEnquiry);

module.exports = router;