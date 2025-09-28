import { RouterProvider } from "react-router-dom";
import Card from "./Card";

import Effect from "./Effect";

import Login from "./Login";
import Navbar from "./Navbar";
import Router from "./Router";

function App() {
  
  return(
    <div>
    <RouterProvider router={Router} />
    </div>
  )
}

export default App
