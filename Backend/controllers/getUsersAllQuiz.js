const Quiz=require("../models/quizModel");

async function getAllQuizes(req,res){
    try{
        
        const {email}=req.query;

        console.log(email);

        if(!email){
            return res.status(400).json({
                success:false,
                message:"Email is required",
            })
        }


        const quizess=await Quiz.find({email:email}).sort({createdAt:-1});
        
        return res.status(200).json({
            success:true,
            message:"Quizess retrieved successfully",
            data:quizess,
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
    getAllQuizes:getAllQuizes,
}