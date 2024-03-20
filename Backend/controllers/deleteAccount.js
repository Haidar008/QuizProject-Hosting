const User=require("../models/userModel");
const Quiz=require("../models/quizModel");


async function deleteAccount(req,res){
    try{
        
        console.log("Inside Controller");
        
        await User.findByIdAndDelete({ _id:req.user._id});
        await Quiz.deleteMany({ email: req.user.email });
        
        return res.status(200).json({
            success:true,
            message:"Account Deleted Successfully",
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
    deleteAccount:deleteAccount,
};