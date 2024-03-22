const User=require("../models/userModel");
const otpGenerator=require("otp-generator");
const OTP=require("../models/otpModel");


async function generateOTP(req,res){
    try{
        
        const {email}=req.body;
        console.log("email",email);



        const user=await User.find({email:email});
        console.log(user);

        if(user.length>0){
            return res.status(401).json({
                success:false,
                message:"Email is already registered with us"
            })
        }

        let otp=otpGenerator.generate(6,{
            digits:true,
            upperCaseAlphabets:false,
            lowerCaseAlphabets:false,
            specialChars:false,
        })

        const userOTP=await OTP.find({email:email});
        let otpArray=[];

        userOTP.map((Otp)=>{
            otpArray.push(Otp.otp);
        })

        console.log(otpArray);

        while(otpArray.includes(otp)){
                otp=otpGenerator.generate(6,{
                digits:true,
                upperCaseAlphabets:false,
                lowerCaseAlphabets:false,
                specialChars:false,
            })
        }

        const createdOTP=await OTP.create({
            email,
            otp,
            createAt:Date.now(),
            expireAt:Date.now()+5*60*1000,
        })

        res.status(200).json({
            success:true,
            message:"OTP sent successfully",
            data:createdOTP,
        })
    }
    catch(error){
        res.status(400).json({
            success:false,
            message:"Something went wrong,try again",
            error:error.message,
        })
    }
}

module.exports={
    generateOTP:generateOTP,
};