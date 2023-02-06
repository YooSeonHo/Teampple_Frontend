import React from 'react';
import { Navigate } from 'react-router-dom';


const PrivateRouter = ({ children } : {children : any}) => {
  return !localStorage.getItem('jwt_accessToken') ? <Navigate to='/login' /> : children;
};

export default PrivateRouter;