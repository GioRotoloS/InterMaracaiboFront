import React from 'react';
import { 
    createBrowserRouter,
    Navigate 
} from "react-router-dom";
import Login from '../views/auth/Login';
import Admin from '../views/admin/admin';
import Views from '../views/admin/views';
import Almacen from '../views/Finanzas/almacen'
import '../Styles/style.css';
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
        path: "/views",
        element: <Views/>
    },
    {
        path: "/store",
        element: <Almacen/>
    },
    {
        path: "*",
        element: <Navigate to='/' replace />
    }
]);

export default router;