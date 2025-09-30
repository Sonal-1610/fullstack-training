import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
 import Login from './Login'
 import Parent from './Parent'
 import Dashboard from './Dashboard'
 import Home from './Home'
 import About from './About'

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

