import React from 'react'

import './App.css'

function App() {


  return (
   <>
    <div className='h-screen w-screen flex '>

      <nav className='w-[15%] h-full bg-zinc-50 flex flex-col items-center pt-5'>
        <a href='/create'  className='py-2 px-5 border rounded border border-blue-200 text-blue-300' >Add A New Product</a>

        <hr  className='w-[80%] my-3 '/>
        <h1 className='text-2xl mb-3 w-[80%] '>Category Filter </h1>
        <ul className=' w-[80%]'>
        <li className=' mb-3 flex items-center'>
          <span className='rounded-full   w-[15px] mr-2 h-[15px] bg-blue-100'></span>{' '}
          cat1
       </li>
         <li className=' mb-3 flex items-center'>
          <span className='rounded-full   w-[15px] mr-2 h-[15px] bg-red-100'></span>{' '}
          cat1
       </li>
         <li className=' mb-3 flex items-center'>
          <span className='rounded-full   w-[15px] mr-2 h-[15px] bg-green-100'></span>{' '}
          cat1
       </li>
        </ul>
      </nav>

      <div className='h-full w-[85%]  p-10 pt-[5%]'>
      <div className='card p-3 border shadow rounded w-[18%] h-[30vh] flex  flex-col justify-center items-center'>


      <div
       className='hover:scale-110  mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center '
        style={{backgroundImage : 'url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)',}}>
      </div>
      <h1>lorem15dj akcds , ewdklsnvm </h1>
        
      </div>

      </div>
    </div>
   </>
  )
}

export default App
