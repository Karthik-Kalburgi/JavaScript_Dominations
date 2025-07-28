import React from 'react'
import { Link } from 'react-router-dom'

const User = () => {
 
  return (
    <>

   <div className='w-1/2 m-auto mt-10 '>
   <h1>User</h1>
   <div className='flex flex-col  mt-5 '>
    <Link  to='/user/kk' className='p-3 bg-red-300 text-2xl mb-3 hover:bg-red-500'>KK</Link>
    <Link to='/user/rahul' className='p-3 bg-red-300 text-2xl mb-3 hover:bg-red-500'>Rahul</Link>
    <Link to='/user/soahil' className='p-3 bg-red-300 text-2xl mb-3 hover:bg-red-500'>soahil</Link>
   </div>
 

   </div>
    </>
  )
}

export default User