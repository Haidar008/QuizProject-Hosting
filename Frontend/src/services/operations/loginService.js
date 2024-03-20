import apiConnector from "../apiconnector";
import { setLoading, setToken, setUserData } from "../../slices/authSlice";
import {toast} from "react-hot-toast"

async function loginservice(body,navigate,dispatch){
    dispatch(setLoading(true));
    const url="http://localhost:4000/api/v1/user/login";
    try{
        console.log(body);
        const response=await apiConnector("POST",url,null,null,body);
        console.log(response);
        dispatch(setToken(response.data.token));
        dispatch(setUserData(response.data.user))
        navigate("/");
        toast.success("Login Successfull")
    }
    catch(error){
        console.log(error);
        toast.error(error.response.data.message);
    }
    
    dispatch(setLoading(false));
}

export default loginservice;