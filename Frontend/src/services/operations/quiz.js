import apiConnector from "../apiconnector";
import toast from "react-hot-toast";
import { setLoading } from "../../slices/authSlice";
import {setMyQuizs} from "../../slices/quizSlice";

export const submitQuiz = async (body,dispatch) => {
    dispatch(setLoading(true));
    const url="http://localhost:4000/api/v1/user/submitQuiz";
    try{
        const response=await apiConnector("POST",url,null,null,body);
        console.log(response);
        toast.success("Quiz Submitted Successfully");
    }
    catch(error){
        console.log(error);
        toast.error(error.message);
    }
    dispatch(setLoading(false));
}


export const getAllQuizes=async(params,navigate,dispatch)=>{

    
    dispatch(setLoading(true));
    const url="http://localhost:4000/api/v1/user/getAllQuizes";
    try{
        const response=await apiConnector("GET",url,null,params,null);
        dispatch(setMyQuizs(response.data.data));
        navigate("/Dashboard/mySubmission");
    }
    catch(error){
        console.log(error.response);
        toast.error("Something Went Wrong,try again");
    }
    dispatch(setLoading(false));
}



