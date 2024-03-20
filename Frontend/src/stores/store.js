import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../slices/authSlice";
import {quizSlice} from "../slices/quizSlice";

const store=configureStore({
    reducer:{
        auth:authSlice.reducer,
        quiz:quizSlice.reducer,
    }
})

export default store;
