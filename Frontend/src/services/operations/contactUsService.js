import apiConnector from "../apiconnector";
import toast from "react-hot-toast";
import {setLoading} from "../../slices/authSlice";


async function contactUs(body,dispatch){
    dispatch(setLoading(true));
    const url=" https://quizproject-hosting-1.onrender.com/api/v1/user/contactUs";
    try{
        const response=await apiConnector("POST",url,null,null,body);
        console.log(response);
        toast.success("Message Sent Successfully");
    }
    catch(error){
        console.log(error);
        toast.error("Something Went Wrong,try again");
    }
    dispatch(setLoading(false));
}

export default contactUs;