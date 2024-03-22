import apitConnector from "../apiconnector";
import {setLoading} from "../../slices/authSlice";
import toast from "react-hot-toast";

async function changePassword(body,navigate,dispatch){
    dispatch(setLoading(true));
    const url=" https://quizproject-hosting-1.onrender.com/api/v1/user/changePassword";
    try{
        const resposne=await apitConnector("PUT",url,null,null,body);
        console.log(resposne);
        toast.success("Password Changed Successfully");
        navigate("/login");
    }
    catch(error){
        console.log(error);
        toast.error(error.response.data.message);
    }
    dispatch(setLoading(false));
}

export default changePassword;