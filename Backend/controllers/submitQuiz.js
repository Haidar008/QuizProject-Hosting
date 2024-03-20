const Quiz=require("../models/quizModel");

async function submitQuiz(req,res){
    try{
        const {email,score,topic}=req.body;

        if(!email||!score||!topic){
            return res.status(404).json({
                success:false,
                message:"All fields are required",
            })
        }

        const quiz=await Quiz.create({email:email,score:score,topic:topic,createdAt:Date.now()});

        return res.status(200).json({
            success:true,
            message:"Quiz Submitted successfully",
            quiz,
        })
    }
    catch(error){
        return res.status(400).json({
            success:false,
            message:"Something Went Wrong,try again",
        })
    }
}

module.exports={
    submitQuiz:submitQuiz,
}