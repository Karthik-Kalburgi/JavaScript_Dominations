import React from 'react'

const Cards = ({users}) => {
  return (
    <>
    {users.map((item,index)=>{
      return(
        
 <div className='w-52  bg-zinc-100 flex flex-col items-center rounded-xl p-4 '>
    <div className='w-[3vw] h-[3vw]   rounded-full bg-blue-500 overflow-hidden '>
      <img src=''  className='w-full h-full object-cover'></img>
    </div>
    <h1 className='text-center font-semibold mt-2'>KK</h1>
    <h4 className='opacity-40 text-xs font-semibold'>KK#gmail.com</h4>
    <p className='text-center text-xs font-semibold tracking-tight leading-1'>loremdcccmks a jkncsdmwel kbchwbnwgwy; </p>
    <button className='text-xs font-semibold bg-red-600 rounded-lg px-3 py-1 mt-2 text-white'>Remove It </button>

    </div>
    )})}
   
    </>
  )
}

export default Cards