const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
  cloud_name: process.env.CLD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET
});

const cloudinaryUploadImg = async (fileToUpload) => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(fileToUpload,
            { 
                resource_type: "auto"
            }, (error, result) => {
            if (error) {
                reject(error);
            } else {
                if (result && result.secure_url) {
                    resolve({
                        url: result.secure_url,
                    });
                } else {
                    reject(new Error('Failed to upload image'));
                }
            }
        });
    });
};


module.exports = cloudinaryUploadImg;