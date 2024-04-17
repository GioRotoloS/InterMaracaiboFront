import React from 'react';
import { 
    createBrowserRouter,
    Navigate 
} from "react-router-dom";
import Login from '../views/auth/Login';
import Admin from '../views/admin/admin';
import Views from '../views/admin/views';
import Users from '../views/admin/users';
import AllUsers from '../views/admin/allusers';
import Permisos from '../views/admin/permisos';
import Cargos from '../views/admin/cargos';
import Dept from '../views/admin/dept';
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
        path: "/admin/users",
        element: <Users/>
    },
    {
        path: "/admin/users/allusers",
        element: <AllUsers/>
    },
    {
        path: "/admin/permit",
        element: <Permisos/>
    },
    {
        path: "/admin/positions",
        element: <Cargos/>
    },
    {
        path: "/admin/dept",
        element: <Dept/>
    },
    {
        path: "/admin/views",
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
        path: "/purch/orderc",
        element: <OrdenesC/>
    },
    {
        path: "*",
        element: <Navigate to='/' replace />
    }
]);

export default router;