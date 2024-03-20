import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


export const PrivateRoute = ({children}) => {

    const token=useSelector((state)=>state.auth.token);

    if(token !== null){
        return children;
    }
    else{
        //ager token nahi mila toh user ko kisi dusre route pe redirect karwado
        return <Navigate to="/login"/>
    }
}

export default PrivateRoute;
