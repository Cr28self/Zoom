import React from 'react';
import {Navigate} from 'react-router-dom';
import {adminAuth, useAuth} from "../api/auth";




function AdminRoute({ children }) {
    return (
        useAuth()&&adminAuth() ? children: <Navigate to='/login'/>
    )
}

export default AdminRoute