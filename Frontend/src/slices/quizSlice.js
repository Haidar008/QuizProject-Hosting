import { createSlice } from "@reduxjs/toolkit";

const initialState={
    myQuizs:JSON.parse(localStorage.getItem("myquiz"))||[],
}
export const quizSlice=createSlice({
        name:"quiz",
        initialState,
        reducers:{
           setMyQuizs:(state,actions)=>{
                state.myQuizs=actions.payload;
                localStorage.setItem("myquiz",JSON.stringify(actions.payload));
           }
        }
});

export const {setMyQuizs}=quizSlice.actions;
export default quizSlice.reducer;
