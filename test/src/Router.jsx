import React from 'react'
import Login from './Login'
 import {BrowserRouter,Route,Routes} from 'react-router-dom'
const Router = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/dashboard' element=
            {<Dashboard /> }/>

            <Route path='/login' element={<Login />} />
             </Routes>
        </BrowserRouter>
       
        
    </div>
    
  )
}

export default Router

