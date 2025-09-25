import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
 import Login from './Login'
 import Parent from './Parent'
 import Dashboard from './Dashboard'
 import Home from './Home'
 import About from './About'




//  import {BrowserRouter,Route,Routes} from 'react-router-dom'
// const Router = () => {
//   return (
//     <div>
//         <BrowserRouter>
//         <Routes>
//             <Route path='/dashboard' element=
//             {<Dashboard /> }/>

//             <Route path='/login' element={<Login />} />
//              </Routes>
//         </BrowserRouter>
       
        
//     </div>
    
//   )
// }


const Router =createBrowserRouter([
  {
    element: <Parent/> ,
  children: [
    {
    path:"/dashboard",
    element:<Dashboard />
  },
  {
    path:"/login",
    element:<Login />
  },
  {
    path:"/home",
    element:<Home />
  },
  {
    path:"/about",
    element:<About />
  },
]
  }
  

])

export default Router

