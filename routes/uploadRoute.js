const express = require("express");
const { uploadImages, deleteImages } = require("../controller/uploadCTRL");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");
const { uploadPhoto, productImageResize } = require("../middlewares/uploadImages");
const router = express.Router();

router.post("/upload-image",authMiddleware,isAdmin,uploadPhoto.array("images", 10),productImageResize,uploadImages);
router.delete("/delete-image/:id", authMiddleware, isAdmin, deleteImages);kk

module.exports = router;