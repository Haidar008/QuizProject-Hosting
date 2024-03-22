const User=require("../models/userModel");
const crypto=require("crypto");
const bcrypt=require("bcrypt");
const mailSender=require("../utils/mailSender");
const updatePassword=require("../mails/templates/passwordUpdate")

//generate Password reset token
async function sendResetToken(req,res){
    try{

        const {email}=req.body;

        console.log(email);

        if(!email){
            return response.status(400).json({
                success:false,
                message:"Email is required",
            })
        }

        const user=await User.findOne({email:email});

        if(!user){
            return res.status(404).json({
                success:false,
                message:"Email is not registered with us",
            })
        }

        const resetToken=crypto.randomBytes(20).toString("hex");

        const resetLink=`https://quiz-project-frontend-jz70trx3d-md-haidar-parwezs-projects.vercel.app/resetPassword/token/${resetToken}`;
        const expiryTime=Date.now()+5*60*1000;
        console.log(expiryTime)

        await User.findByIdAndUpdate(user._id,{resetPasswordToken:resetToken,resetPasswordExpire:expiryTime})
        const message = `You can reset your Quizwebsite password by clicking this link::\n\n${resetLink}`;

        await mailSender(user.email,"Password Reset Link",message);

        return res.status(200).json({
            success:false,
            message:`Password Reset Link sent to ${email}`,
        })
    }
    catch(error){
        return res.status(400).json({
            success:false,
            message:"Something went wrong,try again",
            error:error,
        })
    }
}

//change password
async function changePassword(req,res){
    try{
        const {newPassword,confirmNewPassword,token}=req.body;
        console.log(token);

        const user=await User.findOne({resetPasswordToken:token});

        if(!user){
            return res.status(404).json({
                success:false,
                message:"Link is invalid"
            })
        }

        
        if(user.resetPasswordExpire<Date.now()){
            return res.status(400).json({
                success:false,
                message:"Link has Expired"
            })
        }

        if(newPassword !== confirmNewPassword){
            return res.status(401).json({
                success:false,
                message:"Password and ConfirmPassword must be same",
            })
        }

        const hashedPassword=await bcrypt.hash(newPassword,10);


        await User.findByIdAndUpdate(user._id,{passWord:hashedPassword});
        const name=`${user.firstName} ${user.lastName}`;
        await mailSender(user.email,"Quizwebsite Password Update:",updatePassword(user.email,name));

        return res.status(200).json({
            success:true,
            message:"Password changed Successfully",
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
    sendResetToken:sendResetToken,
    changePassword:changePassword,
};