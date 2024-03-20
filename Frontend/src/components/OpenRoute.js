
import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';

const OpenRoute = ({children}) => {
    const token=useSelector((state)=>state.auth.token);
    const navigate=useNavigate();

    if(token === null){
        return children;
    }
    else {
        return <Navigate to="/"/>
    }
}

export default OpenRoute;