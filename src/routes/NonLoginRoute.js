import React from 'react';
import {Navigate} from 'react-router-dom';
import {useAuth} from "../api/auth";





function NonLoginRouteRoute({ children }) {
    return (
        useAuth() ?<Navigate to='/'/>:children
    )
}

export default NonLoginRouteRoute