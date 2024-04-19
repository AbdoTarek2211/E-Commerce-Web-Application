const express = require('express');
const { createUser, loginUserCtrl, getAllUsers, getUser, deleteUser, updateUser, blockUser, unblockUser, handleRefreshToken, logout } = require('../controller/userCTRL');
const {authMiddleware, isAdmin} = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/register', createUser);
router.post('/login', loginUserCtrl);
router.get('/all-users',getAllUsers);
router.get('/refresh',handleRefreshToken);
router.get('/logout',logout);
router.get('/:id',authMiddleware,isAdmin,getUser);
router.delete('/:id',deleteUser);
router.put('/update-user',authMiddleware,updateUser);
router.put('/block-user/:id',authMiddleware,isAdmin,blockUser);
router.put('/unblock-user/:id',authMiddleware,isAdmin,unblockUser);

module.exports = router;