const Blog = require('../models/blogModel');
const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');
const validateMongoID = require('../utils/validateDB');
const cloudinaryUploadImg = require('../utils/cloudinary');
const fs = require('fs');

const createBlog = asyncHandler(async (req, res) => {
    try {
        const newBlog = await Blog.create(req.body);
        res.json(newBlog);
    }
    catch (error) {
        throw new Error(error);
    }
});

const updateBlog = asyncHandler(async (req, res) => {
    const {id} = req.params;
    validateMongoID(id);
    try {
        const updateBlog = await Blog.findByIdAndUpdate(id,req.body,{
            new:true,
        });
        res.json(updateBlog);
    }
    catch (error) {
        throw new Error(error);
    }
});

const getBlog = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoID(id);
    try {
        const getBlog = await Blog.findById(id).populate('likes').populate('dislikes');
        await Blog.findByIdAndUpdate(id, {
            $inc: { numOfViews: 1 },
        },
            { new: true, }
        );
        res.json(getBlog);
    }
    catch (error) {
        throw new Error(error);
    }
});

const getAllBlogs = asyncHandler(async (req,res) =>{
    try{
        const getBlogs = await Blog.find();
        res.json(getBlogs);
    }
    catch(error){
        throw new Error(error);
    }
});

const deleteBlog = asyncHandler(async (req, res) => {
    const { id } = req.params
    validateMongoID(id);
    try {
        const deleteBlog = await Blog.findByIdAndDelete(id);
        res.json(deleteBlog);
    }
    catch (error) {
        throw new Error(error);
    }
});

const likeBlog = asyncHandler(async (req,res) =>{
    const {blogId} = req.body;
    validateMongoID(blogId);
    const blog = await Blog.findById(blogId);
    const loginUserId = req?.user?._id;
    const isLiked = blog?.isLiked;
    const isDisliked = blog?.dislikes?.find((userId) => userId?.toString() === loginUserId?.toString());
    if(isDisliked){
        const blog = await Blog.findByIdAndUpdate(blogId,{
            $pull: {dislikes:loginUserId},
            isDisliked:false,
        },
        {new:true},
    );
    res.json(blog);
    }
    if(isLiked){
        const blog = await Blog.findByIdAndUpdate(blogId,{
            $pull: {likes:loginUserId},
            isLiked:false,
        },
        {new:true},
    );
    res.json(blog);
    }
    else{
        const blog = await Blog.findByIdAndUpdate(blogId,{
            $push: {likes:loginUserId},
            isLiked:true,
        },
        {new:true},
    );
    res.json(blog);
    }
});

const dislikeBlog = asyncHandler(async (req,res) =>{
    const {blogId} = req.body;
    validateMongoID(blogId);
    const blog = await Blog.findById(blogId);
    const loginUserId = req?.user?._id;
    const isDisLiked = blog?.isDisliked;
    const isliked = blog?.likes?.find((userId) => userId?.toString() === loginUserId?.toString());
    if(isliked){
        const blog = await Blog.findByIdAndUpdate(blogId,{
            $pull: {likes:loginUserId},
            isLiked:false,
        },
        {new:true},
    );
    res.json(blog);
    }
    if(isDisLiked){
        const blog = await Blog.findByIdAndUpdate(blogId,{
            $pull: {dislikes:loginUserId},
            isDisliked:false,
        },
        {new:true},
    );
    res.json(blog);
    }
    else{
        const blog = await Blog.findByIdAndUpdate(blogId,{
            $push: {dislikes:loginUserId},
            isDisliked:true,
        },
        {new:true},
    );
    res.json(blog);
    }
});

const uploadImages = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoID(id);
    try {
        const uploader = async (path) => cloudinaryUploadImg(path, "images");
        const urls = [];
        const files = req.files;
        for (const file of files) {
            const { path } = file;
            const newPath = await uploader(path);
            urls.push(newPath);
            //fs.unlinkSync(path);
        }
        const findBlog = await Blog.findByIdAndUpdate(id, {
            images: urls.map((file) => {
                return file;
            }),
        },
            {
                new: true,
            });
        res.json(findBlog);
    }
    catch (error) {
        throw new Error(error);
    }
});

module.exports = {
    createBlog,
    updateBlog,
    getBlog,
    getAllBlogs,
    deleteBlog,
    likeBlog,
    dislikeBlog,
    uploadImages,
}