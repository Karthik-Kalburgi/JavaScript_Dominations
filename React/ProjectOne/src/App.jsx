import React from 'react'

import './App.css'
import Home from './Components/Home'
import { Route, Routes } from 'react-router-dom'
import Nav from './Components/Nav'
import Details from './Components/Details'

function App() {


  return (
   <>
    <div className='h-screen w-screen flex '>
    <Nav />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/details/:id' element={<Details />} />

    </Routes>
   
 


 













 








</div>

   </>
  )
}

export default App
