import {toast} from "react-hot-toast";
import { setLoading } from "../../slices/authSlice";
import apiConnector from "../apiconnector";

async function SignUp(body,navigate,dispatch){
    dispatch(setLoading(true));
    const url=" https://quizproject-hosting-1.onrender.com/api/v1/user/signUp"
    try{
        const response=await apiConnector("POST",url,null,null,body);
        navigate("/login");
        toast.success("Signup Successfull,Login to access quizzes");
    }
    catch(error){
        console.log(error);
        toast.error(error.response.data.message);
    }
    dispatch(setLoading(false));
}

export default SignUp;