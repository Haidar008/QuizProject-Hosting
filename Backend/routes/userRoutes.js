const express=require("express");
const router=express.Router();

const {isAuthenticatedUser}=require("../middlewares/auth");
const {signUp}=require("../controllers/signUp");
const {login}=require("../controllers/login");
const {generateOTP}=require("../controllers/otp");
const {deleteAccount}=require("../controllers/deleteAccount");
const {updatePicture}=require("../controllers/updatePicture");
const {sendResetToken,changePassword}=require("../controllers/resetPassword");
const {getAllQuizes}=require("../controllers/getUsersAllQuiz");
const {submitQuiz}=require("../controllers/submitQuiz");
const {contactUs}=require("../controllers/contactUS");
const {updateProfile}=require("../controllers/updateProfile");
const {updateUserPassword}=require("../controllers/updatePassword");

router.post("/user/signUp",signUp);
router.post("/user/login",login);
router.post("/user/otp",generateOTP);
router.delete("/user/deleteAccount",isAuthenticatedUser,deleteAccount);
router.put("/user/updatePicture",isAuthenticatedUser,updatePicture);
router.post("/user/generateToken",sendResetToken);
router.put("/user/changePassword",changePassword);
router.get("/user/getAllQuizes",getAllQuizes);
router.post("/user/submitQuiz",submitQuiz);
router.post("/user/contactUs",contactUs);
router.put("/user/updateProfile",updateProfile);
router.put("/user/updatePassword",updateUserPassword);

module.exports=router;
