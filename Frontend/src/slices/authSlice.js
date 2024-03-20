import {createSlice} from "@reduxjs/toolkit"

const initialState={
    token:JSON.parse(localStorage.getItem("token"))||null,
    authLoading:false,
    signUpdata:JSON.parse(localStorage.getItem("SignUpData"))||null,
    userData:JSON.parse(localStorage.getItem("userData"))||null
}

export const authSlice=createSlice({
        name:"auth",
        initialState,
        reducers:{
            setToken:(state,actions)=>{
                state.token=actions.payload;
                localStorage.setItem("token",JSON.stringify(actions.payload));
            },
            setLoading:(state,actions)=>{
                state.authLoading=actions.payload;
            },
            setSignupData:(state,actions)=>{
                state.signUpdata=actions.payload;
                localStorage.setItem("SignUpData",JSON.stringify(actions.payload));
            },
            setUserData:(state,actions)=>{
                state.userData=actions.payload;
                localStorage.setItem("userData",JSON.stringify(actions.payload));
            }
        }
});

export const {setToken,setLoading,setSignupData,setUserData} =authSlice.actions;
export default authSlice.reducer;


