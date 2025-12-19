const path = require('path');
const fs = require('fs');
const multer = require('multer');

const useCloudinary = !!process.env.CLOUDINARY_CLOUD_NAME;

let storage;

if (useCloudinary) {
  try {
    const { CloudinaryStorage } = require('multer-storage-cloudinary');
    const cloudinary = require('./cloudinary');
    storage = new CloudinaryStorage({
      cloudinary,
      params: {
        folder: process.env.CLOUDINARY_FOLDER || 'ecommerce',
        allowed_formats: ['jpg', 'jpeg', 'png', 'webp']
      }
    });
  } catch (error) {
    console.warn('Cloudinary not configured, using local storage');
  }
}

if (!storage) {
  const uploadPath = path.join(__dirname, '../uploads');
  if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true });
  }
  storage = multer.diskStorage({
    destination: (_req, _file, cb) => cb(null, uploadPath),
    filename: (_req, file, cb) => {
      const ext = path.extname(file.originalname);
      cb(null, `${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`);
    }
  });
}

const upload = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024 }
});

module.exports = upload;


