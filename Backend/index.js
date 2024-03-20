const express=require("express");
const app=express();
require("dotenv").config()
const UserRoute=require("./routes/userRoutes");
const connectDatabase=require("./config/database");
const cloudinaryConfig=require("./config/cloudinary");
const cookieParser=require("cookie-parser");
const fileUpload=require("express-fileupload");
const cors=require("cors");


app.use(express.json());
app.use(cookieParser());
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

app.use(cors({
    origin:"http://localhost:3000"
}))

app.listen(process.env.PORT,()=>{
    console.log("App is running successfully");
})

app.use("/api/v1",UserRoute);

connectDatabase();
cloudinaryConfig();
