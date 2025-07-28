import React from 'react'
import Home from '../Home'
import User from '../User'
import About from '../About'
import { Route, Routes } from 'react-router-dom'
import UserDetail from '../UserDetail'


const Routing = () => {
  return (
    <>
     <Routes>
           <Route path='/' element={<Home />}/>
           <Route path='/user' element={<User />}/>
           <Route path='/user/:names' element={<UserDetail />}/>
           <Route path='/about' element={<About />}/>
         </Routes>
         </>
  )
}

export default Routing