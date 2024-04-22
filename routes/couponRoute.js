const express = require('express');
const { createCoupon, getAllCoupons, getCoupon, updateCoupon, deleteCoupon } = require('../controller/couponCTRL');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/create-coupon',authMiddleware,isAdmin,createCoupon);
router.get("/get-all-coupons", authMiddleware, isAdmin, getAllCoupons);
router.get("/get-coupon/:id", authMiddleware, isAdmin, getCoupon);
router.put("/update-coupon/:id", authMiddleware, isAdmin, updateCoupon);
router.delete("/delete-coupon/:id", authMiddleware, isAdmin, deleteCoupon);

module.exports = router;