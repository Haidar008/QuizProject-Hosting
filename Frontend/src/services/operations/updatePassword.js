import apiConnector from "../apiconnector";
import {setLoading, setUserData} from "../../slices/authSlice";
import {toast} from "react-hot-toast"

//change Password
export const updatePassword= async(body,navigate,dispatch)=>{
        dispatch(setLoading(true));
        const url=" https://quizproject-hosting-1.onrender.com/api/v1/user/updatePassword";
        try{
            const response=await apiConnector("PUT",url,null,null,body);
            console.log(response);
            
            toast.success("Password Changed Successfully");
            navigate("/DashBoard/myProfile");
        }
        catch(error){
            console.log(error);
            toast.error(error.response.data.message);
        }
        dispatch(setLoading(false));
}

//change Profile Picture
export const changeProfilePicture= async(body,navigate,dispatch)=>{
    dispatch(setLoading(true));
    const url=" https://quizproject-hosting-1.onrender.com/api/v1/user/updatePicture";
    const headers={
        "content-type":"multipart/form-data",
    }
    try{
        const response=await apiConnector("PUT",url,headers,null,body);
        console.log(response.data.updatedUser);
        dispatch(setUserData(response.data.updatedUser));
        toast.success("Profile Picture Updated Successfully");
        navigate("/DashBoard/myProfile");
    }
    catch(error){
        console.log(error);
        toast.error(error.response.data.message);
    }
    dispatch(setLoading(false));
}


//Update Profile Details
export const updateProfile= async(body,navigate,dispatch)=>{
    dispatch(setLoading(true));
    const url=" https://quizproject-hosting-1.onrender.com/api/v1/user/updateProfile";
    try{
        const response=await apiConnector("PUT",url,null,null,body);
        console.log(response);
        dispatch(setUserData(response.data.data));
        toast.success("Profile Updated Successfully");
        navigate("/DashBoard/myProfile");
    }
    catch(error){
        console.log(error);
        toast.error(error.response.data.message);
    }
    dispatch(setLoading(false));
}
