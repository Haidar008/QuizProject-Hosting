const User=require("../models/userModel");
const bcrypt=require("bcrypt");
const mailSender=require("../utils/mailSender");
const updatePassword=require("../mails/templates/passwordUpdate")

//change password
async function updateUserPassword(req,res){
    try{
        const {email,newPassword,currentPassword}=req.body;
    
        console.log(email,newPassword,currentPassword);
        
        const user=await User.findOne({email:email});
        console.log(user);

        const match=await bcrypt.compare(currentPassword,user.passWord);

        if(!match){
            return res.status(400).json({
                success:false,
                message:"Current Password did not match",
            })
        }

        
        
        const hashedPassword=await bcrypt.hash(newPassword,10);

        console.log(hashedPassword);


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
    updateUserPassword:updateUserPassword,
};