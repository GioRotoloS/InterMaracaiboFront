import React from 'react';
import { 
    createBrowserRouter,
    Navigate 
} from "react-router-dom";
import Login from '../views/auth/Login';
import Admin from '../views/admin/admin';
import Views from '../views/admin/views';
import Almacen from '../views/Finanzas/almacen'
import Compras from '../views/Finanzas/compras';
import Recibidor from '../views/Finanzas/recibidor';
import OrdenesC from '../views/Finanzas/ordenesC';
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
        path: "/purch",
        element: <Compras/>
    },
    {
        path: "/entry",
        element: <Recibidor/>
    },
    {
        path: "/orderc",
        element: <OrdenesC/>
    },
    {
        path: "*",
        element: <Navigate to='/' replace />
    }
]);

export default router;