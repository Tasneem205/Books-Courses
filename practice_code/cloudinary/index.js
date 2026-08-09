const express = require('express');
const app = express();
const {cloudinary} = require('./utils/cloudinary');

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));
app.use(express.json());

app.post('/api/upload', async (req, res) => {
    try {
        const fileStr = req.body.data;
        const uploadedResponse = await cloudinary.uploader.upload(fileStr, { upload_preset: 'smart-center-app', folder: 'students'  });
        console.log(uploadedResponse);
        res.json({msg: "YAYAYAYA"});
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Something wrong"});
    }
})

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});