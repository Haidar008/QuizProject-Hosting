const mongoose=require("mongoose");
require("dotenv").config();

function connectDatabase(){
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=>{console.log("Database Connection is Successfull")})
    .catch((error)=>{
        console.log("Database Connection is failed",error);
    })
}

module.exports=connectDatabase;