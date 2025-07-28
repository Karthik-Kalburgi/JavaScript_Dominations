import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UserDetail = () => {
  const {names} = useParams();
  const Navigate = useNavigate();

  const GoBackHandler = (e)=>{
      Navigate('/user');
    
  }
  
  return (
    <div className='w-1/2 m-suto mt-10'>
      <h1 className='text-5xl font-semibold text-black mt-5'>User {names}</h1>
      <h1 className='text-5xl'> {names}</h1>
      <p className='font-semibold text-md  mt-4'>wjhwenwe qwdhehwvdwqj dwuql </p>
      <button onClick={GoBackHandler} className='bg-red-200 font-semibold text-white px-4 py-3  mt-16'>Go Back</button>
      
    </div>
  )
}

export default UserDetail