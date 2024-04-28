const fs = require("fs");
const { cloudinaryUploadImg, cloudinaryDeleteImg } = require("../utils/cloudinary");
const asyncHandler = require("express-async-handler");

const uploadImages = asyncHandler(async (req, res) => {
  try {
    const uploader = async (path) => cloudinaryUploadImg(path, "images");
    const urls = [];
    const files = req.files;
    for (const file of files) {
      const { path } = file;
      const newPath = await uploader(path);
      urls.push(newPath);
      //fs.unlinkSync(file.path);
    }
    const images = urls.map((file) => {
      return file;
    });
    res.json(images);
  } catch (error) {
    throw new Error(error);
  }
});

const deleteImages = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const deleter = await cloudinaryDeleteImg(id, "images");
    res.json({ message: "Deleted Image", deleter });
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  uploadImages,
  deleteImages,
};
