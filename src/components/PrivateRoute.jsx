import React, { useContext } from 'react';
import { AuthContext } from '../firebase/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    console.log(loading);
    if(loading){
        return <p>"loadings......................................................................"</p>
    }
    if(!user){
        return <Navigate to='/login'></Navigate>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;