const User=require("../models/userModel");
const OTP=require("../models/otpModel");
const bcrypt=require("bcrypt");

async function signUp(req,res){
    try{

        const {
            firstName,
            lastName,
            email,
            phoneNumber,
            passWord,
            confirmPassword,
            otp,
        }=req.body;

        if(!firstName||!lastName||!email||!phoneNumber||!passWord||!confirmPassword ||!otp){
            return res.status(400).json({
                success:false,
                message:"All fields are required",
            });
        }

        const user=await User.findOne({email:email});
        console.log(user);

        if(user){
            return res.status(400).json({
                success:false,
                message:"Email already exist",
            })
        }

        if(passWord !== confirmPassword){
            return res.status(400).json({
                success:false,
                message:"Password and confirmPassword must be same",
            })
        }

        const Otp=await OTP.find({email:email}).sort({createAt:-1}).limit(1);
        console.log(Otp);
        console.log(Otp[0].otp);
        console.log(otp);
        if(!Otp||otp != Otp[0].otp){
            return res.status(404).json({
                success:false,
                message:"Invalid Otp",
            })
        }

        if(Otp[0].expireAt<Date.now()){
            return res.status(401).json({
                success:false,
                message:"Otp Expired"
            })
        }

        const profilePicture=`https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`;

        const hashedPassword=await bcrypt.hash(passWord,10);
        
        const createdUser=await User.create({
            firstName,
            lastName,
            email,
            passWord:hashedPassword,
            profilePicture,
            phoneNumber,
            otp,
        })

        return res.status(200).json({
            success:true,
            message:"User created successfully",
            data:createdUser,
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

module.exports={
    signUp:signUp,
};