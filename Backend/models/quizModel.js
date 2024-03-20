const mongoose=require("mongoose");

const quizSchema=new mongoose.Schema({
    topic:{
        type:String,
        required:true
    },
    email:{
         type:String,
         required:true,
    },
    score:{
        type:Number,
        required:true,
    },
    createdAt:{
        type:String,
        required:true,
    }
})

module.exports=mongoose.model("Quiz",quizSchema);