const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require('multer');
const uuid = require('uuid').v4;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "shop",
    },
    filename: function (req, file, cb) {
        cb(null, uuid() + '-' + file.originalname)
    }
});

const upload = multer({ storage: storage });


const configuredMulterMiddleware = upload.single('image')

module.exports = configuredMulterMiddleware;