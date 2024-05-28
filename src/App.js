import { RouterProvider } from "react-router-dom";
import React from 'react';
import router from "./utils/routes";
import { AuthContext } from "./utils/authContext";
import './Styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {

  //const { currentUser } = useContext(AuthContext);

  return (
    <div>
      <div>
        <RouterProvider router={router}/>
      </div>
    </div>
  );
}

export default App;