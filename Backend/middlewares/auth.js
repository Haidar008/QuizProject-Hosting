const jwt=require("jsonwebtoken");
const User=require("../models/userModel");

require("dotenv").config();

async function isAuthenticatedUser(request,response,next){
    
    const {token}=request.body
    console.log(token);
    
    if(!token){
        return response.status(400).json({
            success:false,
            message:"Invalid User"
        })
    }

    const decodedData=jwt.verify(token,process.env.JWT_SECRET);

    console.log(decodedData);

    const user=await User.findOne({email:decodedData.email});
    request.user=user;
    console.log(request.user);

    next();
}

module.exports={
    isAuthenticatedUser:isAuthenticatedUser,
};