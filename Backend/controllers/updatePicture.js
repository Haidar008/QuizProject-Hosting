const User=require("../models/userModel");
const uploadImage=require("../utils/cloudinaryUploader");

async function updatePicture(req,res){
    try{
        const picture=req.files.picture;
        const userId=req.user._id;

        console.log(picture);


        if(picture.size > 5*1024*1024){
            return res.status(503).json({
                success:false,
                message:"File Size cannot be more than 5MB"
            })
        }

        const fileType=picture.name.split(".").at(-1).toUpperCase();
        const supportedType=["JPEG","PNG","JPG","SVG"];
        if(!supportedType.includes(fileType)){
            return res.status(403).json({
                success:false,
                message:"File Not Supported"
            })
        }
        if(!picture){
            return res.status(400).json({
                success:false,
                message:"Image is required",
            })
        }

        
        const user=await User.findById({_id:userId});
        if(!user){
            return res.status(404).json({
                success:false,
                message:"User not found"
            })
        }

        const result=await uploadImage(picture,"Quiz");

        const updatedUser=await User.findByIdAndUpdate(userId,{profilePicture:result.secure_url},{new:true});

        return res.status(200).json({
            success:true,
            message:"Profile picture updated sucessfully",
            updatedUser,
        })
    }
    catch(error){
        return res.status(400).json({
            success:false,
            message:"Something went wrong,try again",
            error:error.message,
        })
    }
}

module.exports={
    updatePicture:updatePicture,
};