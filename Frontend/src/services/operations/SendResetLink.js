import apiConnector from "../apiconnector"
import {setLoading} from "../../slices/authSlice"
import toast from "react-hot-toast";

async function sendResetLink(email,body,dispatch){
    dispatch(setLoading(true));
    const url=" https://quizproject-hosting-1.onrender.com/api/v1/user/generateToken";
    
    try{
        const response=await apiConnector("POST",url,null,null,body);
        console.log(response);
        toast.success(`Reset Link sent to ${email}`);
    }
    catch(error){
        console.log(error);
        toast.error(error.response.data.message);
    }
    dispatch(setLoading(false));
}
export default sendResetLink;