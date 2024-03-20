const mailSender=require("../utils/mailSender");
const contactForm=require("../mails/templates/contactForm");

async function contactUs(req,res){
    try{
        const {name,email,phoneNumber,message}=req.body;
        console.log(email,phoneNumber,message,name);
        if(!name||!email||!phoneNumber||!message){
            return res.status(400).json({
                success:false,
                message:"All fields are required",
            })
        }

        await mailSender(email,"Message Received",contactForm(email,name,message,phoneNumber));
    

        return res.status(200).json({
            success:true,
            message:"Message Sent Successfully",
        })
    }
    catch(error){
        return res.status(400).json({
            success:false,
            message:"Something Went wrong,try again",
            error:error.message
        })
    }
}

module.exports={
    contactUs:contactUs
}