const User=require("../models/userModel");

async function updateProfile(req,res){
    try{
        const {email,firstName,lastName,DOB,gender,phoneNumber,about}=req.body;


        const user=await User.findOne({email:email});

        console.log(user);

        const updateUser=await User.findByIdAndUpdate({_id:user._id},{
            firstName,
            lastName,
            DOB,
            gender,
            phoneNumber,
            about,
        },
        {new:true})

        return res.status(200).json({
            success:true,
            message:"Profile Update Successfully",
            data:updateUser,
        })
        
    }
    catch(error){
        return res.status(400).json({
            success:false,
            message:"Something Went Wrong,try again",
            error:error.message,
        })
    }
}

module.exports={
    updateProfile:updateProfile,
}