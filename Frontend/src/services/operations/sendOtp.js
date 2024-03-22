import { setLoading } from "../../slices/authSlice";
import apiConnector from "../apiconnector";
import {toast} from "react-hot-toast";




async function sendOTP(email,navigate,dispatch){

    dispatch(setLoading(true));
    const url=` https://quizproject-hosting-1.onrender.com/api/v1/user/otp`;
    try{
        const response=await apiConnector("POST",url,null,null,{email});
        console.log("response---->",response);
    
        navigate("/otp");
        toast.success("OTP Sent Successfully");
    }
    catch(error){
        console.log(error);
        toast.error(error.response.data.message);
    }
    dispatch(setLoading(false));
}

export default sendOTP;