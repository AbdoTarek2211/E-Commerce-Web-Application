const express = require('express');
const {
    createUser,
    loginUserCtrl,
    getAllUsers,
    getUser,
    deleteUser,
    updateUser,
    blockUser,
    unblockUser,
    handleRefreshToken,
    logout,
    updatePassword,
    forgotPasswordToken,
    resetPassword,
    loginAdmin,
    getWishList,
    saveAddress,
    userCart,
    getUserCart,
    emptyCart,
    applyCoupon,
    createOrder,
    getOrders,
    getAllOrders,
    updateOrderStatus,
} = require('../controller/userCTRL');
const {authMiddleware, isAdmin} = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/register', createUser);
router.post('/forgot-password',forgotPasswordToken);

router.put('/reset-password/:token',resetPassword);
router.put('/order/update-order-status/:id',authMiddleware,isAdmin,updateOrderStatus);
router.put('/password',authMiddleware,updatePassword);

router.post('/login', loginUserCtrl);
router.post('/login-admin', loginAdmin);
router.post('/cart',authMiddleware,userCart);
router.post('/cart/apply-coupon',authMiddleware,applyCoupon);
router.post('/cart/create-order',authMiddleware,createOrder);

router.get("/get-all-orders", authMiddleware, isAdmin, getAllOrders);
router.post("/get-order-by-user/:id", authMiddleware, isAdmin, getAllOrders);
router.get('/all-users',getAllUsers);
router.get('/get-orders',authMiddleware,getOrders);
router.get('/refresh',handleRefreshToken);
router.get('/logout',logout);
router.get('/get-wishlist',authMiddleware,getWishList);
router.get('/get-user-cart/',authMiddleware,getUserCart);

router.get('/get-user/:id',authMiddleware,isAdmin,getUser);

router.delete('/empty-cart',authMiddleware,emptyCart);

router.delete('/delete-user/:id',deleteUser);

router.put('/update-user',authMiddleware,updateUser);
router.put('/save-address',authMiddleware,saveAddress);

router.put('/block-user/:id',authMiddleware,isAdmin,blockUser);
router.put('/unblock-user/:id',authMiddleware,isAdmin,unblockUser);

module.exports = router;