import { RouterProvider } from "react-router-dom";
import React from 'react';
import router from "./utils/routes";
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {

  return (
    <div>
      <div>
        <RouterProvider router={router}/>
      </div>
    </div>
  );
}

export default App;