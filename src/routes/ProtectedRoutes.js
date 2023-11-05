import React from 'react';
import UserService from '../services/UserService';
import { Navigate } from 'react-router-dom';

const userService = new UserService();

const ProtectedRoutes = ({children}) => {
    const userAuth = userService.UserAuth()
    console.log('usuarioAutenticado', userAuth)
    return userAuth ? children : <Navigate to={"/Login"}/>
}
 
export default ProtectedRoutes;
