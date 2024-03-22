const express=require("express");
const app=express();
require("dotenv").config()
const UserRoute=require("./routes/userRoutes");
const database = require("./config/database");
const {cloudinaryConfig}=require("./config/cloudinary");
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
    origin:"*"
}))

app.listen(process.env.PORT,()=>{
    console.log("App is running successfully at",process.env.PORT);
})

app.use("/api/v1",UserRoute);

app.get("/",(req,res)=>{
    res.send("Server Started Running")
})

database.connect();
cloudinaryConfig();
