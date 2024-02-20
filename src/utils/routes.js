import React from 'react';
import { 
    createBrowserRouter,
    Navigate 
} from "react-router-dom";
import Login from "../views/auth/Login";
import Admin from '../views/admin/admin';
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login/>,
    },
    {
        path: "/admin",
        element: <Admin/>,
    },
    {
        path: "*",
        element: <Navigate to='/' replace />
    }
]);

export default router;