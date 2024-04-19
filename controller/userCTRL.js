const User = require('../models/userModel');
const generateToken = require('../config/JWTToken');
const asyncHandler = require('express-async-handler');
const validateMongoID = require('../utils/validateDB');
const genRefreshToken = require('../config/refreshToken');
const jwt = require('jsonwebtoken');
//Registering a User
const createUser = asyncHandler(async (req, res) => {
    const email = req.body.email;
    const findUser = await User.findOne({ email: email });

    if (!findUser) {
        // Create new User
        const newUser = await User.create(req.body);
        res.json(newUser);
    } else {
        // User already exists
        throw new Error("User Already Exists");
    }
});

//Loging In and Authentication With Tokens
const loginUserCtrl = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const findUser = await User.findOne({ email });
    if (findUser && await findUser.isPasswordMatched(password)) {
        const refreshToken = await genRefreshToken(findUser?.id);
        const updateUser = await User.findByIdAndUpdate(findUser.id, {
            refreshToken: refreshToken,
        },
            { new: true });
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 12 * 60 * 60 * 100,
        });
        res.json({
            _id: findUser?.id,
            firstname: findUser?.firstname,
            lastname: findUser?.lastname,
            email: findUser?.email,
            mobile: findUser?.mobile,
            token: generateToken(findUser?.id),
        });
    }
    else {
        throw new Error("Invalid Credentials");
    }
});

//handling refreshToken
const handleRefreshToken = asyncHandler(async (req,res)=> {
    const cookie = req.cookies;
    if(!cookie?.refreshToken){
        throw new Error("Invalid Refresh Token in Cookies");
    }
    const refreshToken = cookie.refreshToken;
    const user = await User.findOne({refreshToken});
    if(!user){
        throw new Error("Invalid Refresh Token Present");
    }
    jwt.verify(refreshToken,process.env.JWT_SecretKey,(err,decoded) => {
        if(err || user.id !== decoded.id){
            throw new Error("Refresh Token Unexpected Error");
        }
        const accessToken = generateToken(user?.id);
        res.json({accessToken});
    });
});

//handling Logout
const logout = asyncHandler(async (req,res) =>{
    const cookie = req.cookies;
    if(!cookie?.refreshToken){
        throw new Error("Invalid Refresh Token in Cookies");
    }
    const refreshToken = cookie.refreshToken;
    const user = await User.findOne({refreshToken});
    if(!user){
        res.clearCookie('refreshToken',{
            httpOnly:true,
            secure:true,
        });
        return res.sendStatus(204); //204 = forbidden
    }
    await User.findOneAndUpdate({refreshToken},{
        refreshToken:"",
    });
    res.clearCookie("refreshToken",{
        httpOnly:true,
        secure:true,        
    });
    res.sendStatus(204);
});

//Retrieve All Users
const getAllUsers = asyncHandler(async (req, res) => {
    try {
        const getUsers = await User.find();
        res.json(getUsers);
    }
    catch (error) {
        throw new Error(error);
    }
});

//Retrieve One User
const getUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoID(id);
    try {
        const getUser = await User.findById(id);
        res.json({
            getUser,
        });
    }
    catch (error) {
        throw new Error(error);
    }
});

//Deleting a User
const deleteUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoID(id);
    try {
        const deleteUser = await User.findByIdAndDelete(id);
        res.json({
            deleteUser,
        });
    }
    catch (error) {
        throw new Error(error);
    }
});

//Update a User
const updateUser = asyncHandler(async (req, res) => {
    const { id } = req.user;
    validateMongoID(id);
    try {
        const updateUser = await User.findByIdAndUpdate(id, {
            firstname: req?.body?.firstname,
            lastname: req?.body?.lastname,
            email: req?.body?.email,
            mobile: req?.body?.mobile,
        },
            {
                new: true,
            });
        res.json({
            updateUser,
        });
    }
    catch (error) {
        throw new Error(error);
    }
});
//Admin blocking a User
const blockUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoID(id);
    try {
        const block = await User.findByIdAndUpdate(id, {
            isBlocked: true,
        },
            {
                new: true,
            });
        res.json({
            message: "User is Blocked",
        });
    }
    catch (error) {
        throw new Error(error);
    }
});
//Admin unblocking a User
const unblockUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoID(id);
    try {
        const unblock = await User.findByIdAndUpdate(id, {
            isBlocked: false,
        },
            {
                new: true,
            });
        res.json({
            message: "User is Unblocked",
        });
    }
    catch (error) {
        throw new Error(error);
    }
});

module.exports = {
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
};