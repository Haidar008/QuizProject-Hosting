import { setLoading, setToken, setUserData } from "../../slices/authSlice";
import {toast} from "react-hot-toast";

function logout(navigate,dispatch){
    dispatch(setLoading(true));
    try{
        dispatch(setToken(null));
        dispatch(setUserData(null));
        toast.success("Logged Out Successfully");
        navigate("/login");
    }
    catch(error){
        toast.error(error.message);
    }
    dispatch(setLoading(false));
}

export default logout;