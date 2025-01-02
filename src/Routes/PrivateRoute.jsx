/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Loading from "../Components/Loading";

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user, loading} = useAuth()
    if(user){
        return children
    }
    if(loading){
        return <Loading></Loading>
    }
    return (
        <Navigate to='/login' state={{from : location}} replace>
            
        </Navigate>
    );
};

export default PrivateRoute;