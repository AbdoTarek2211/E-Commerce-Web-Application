const express = require('express');
const { createBlog, updateBlog, getBlog, getAllBlogs, deleteBlog, likeBlog, dislikeBlog, uploadImages } = require('../controller/blogCTRL');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const { blogImageResize, uploadPhoto } = require('../middlewares/uploadImages');
const router = express.Router();

router.post('/create-blog',authMiddleware,isAdmin,createBlog);

router.put('/upload-image/:id',authMiddleware,isAdmin,uploadPhoto.array('images',2),blogImageResize,uploadImages);
router.put('/like-blog',authMiddleware,likeBlog);
router.put('/dislike-blog',authMiddleware,dislikeBlog)
router.put('/update-blog/:id',authMiddleware,isAdmin,updateBlog);

router.get('/get-blog/:id',getBlog);
router.get('/get-all-blogs',getAllBlogs);

router.delete('/delete-blog/:id',authMiddleware,isAdmin,deleteBlog);

module.exports = router;