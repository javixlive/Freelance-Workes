const cloudinary = require("cloudinary");
require("dotenv").config();

// const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY } = process.env;

// const CLOUDINARY_CLOUD_NAME = "dfaxzahb0"
// const CLOUDINARY_API_SECRET = "477279579552534"
// const CLOUDINARY_API_KEY = "8H7ZfZznu35WQ3bMH46QEXgWvLg"


// cloudinary.config({
//   cloud_name: CLOUDINARY_CLOUD_NAME,
//   api_key: CLOUDINARY_API_SECRET,
//   api_secret: CLOUDINARY_API_KEY,
//   secure: true,
// });

cloudinary.config({ 
  cloud_name: 'dfaxzahb0', 
  api_key: '477279579552534', 
  api_secret: '8H7ZfZznu35WQ3bMH46QEXgWvLg' 
});

const uploadImage = async (filePath) => {
  return await cloudinary.v2.uploader.upload(filePath, {
    folder: "services",
  });
};

const deleteImage = async (publicId) => {
  return await cloudinary.v2.uploader.destroy(publicId);
};

module.exports = { uploadImage, deleteImage };
