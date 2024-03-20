const cloudinary = require("cloudinary").v2;

async function uploadImage(image, folder) {
    try {
        const options={
            folder:folder,
            resource_type:"auto"
        }
        const result = await cloudinary.uploader.upload(image.tempFilePath,options);
        return result;
    } catch (error) {
        console.error("Error uploading image to Cloudinary:", error);
        throw new Error("Image upload failed");
    }
}

module.exports = uploadImage;
