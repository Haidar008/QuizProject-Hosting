import { setLoading, setSignupData, setToken, setUserData } from "../../slices/authSlice";
import apiConnector from "../apiconnector";
import toast from "react-hot-toast";

async function deleteAccount(body,navigate,dispatch){
    dispatch(setLoading(true));
    const url="http://localhost:4000/api/v1/user/deleteAccount";
    try{
        const response=await apiConnector("DELETE",url,null,null,body);
        console.log(response);
        dispatch(setToken(null));
        dispatch(setUserData(null));
        toast.success(response.data.message);
        navigate("/signUp");
    }
    catch(error){
        console.log(error);
        toast.error(error.message);
    }
    dispatch(setLoading(false));
}

export default deleteAccount;