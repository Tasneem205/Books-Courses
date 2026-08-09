const name = '';
const api_key = '';
const api_secret = '';

const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: name,
    api_key, api_secret
});
console.log(cloudinary);

module.exports = {cloudinary};