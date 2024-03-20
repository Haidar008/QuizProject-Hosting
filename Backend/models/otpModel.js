const mongoose=require("mongoose");
const mailSender=require("../utils/mailSender");
const emailVerification=require("../mails/templates/emailVerification")

const otpSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    otp:{
        type:Number,
        required:true,
    },
    createAt:{
        type:Date,
        Default:Date.now(),
    },
    expireAt:{
        type:Date,
        Default:Date.now()+5*60*1000,
    }
})

otpSchema.pre("save", async function(next) {

    await mailSender(this.email, "Quizwebsite Verification Code:",emailVerification(this.otp));
    next();
});


module.exports=mongoose.model("OTP",otpSchema);