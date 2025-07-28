import React from 'react'

const Forms = () => {
  
  return (
    <div className='mt-10 flex gap-4 justify-center'>
      <form className='flex gap-10' action='' >
      <input type='text ' placeholder='name' className='rounded-lg text-base font-semibold text-black outline-none   px-2 py-1' ></input>
      <input type='text ' placeholder='email' className='rounded-lg text-base font-semibold text-black outline-none   px-2 py-1' ></input>  
      <input type='text ' placeholder='image_url' className='rounded-lg text-base font-semibold text-black outline-none   px-2 py-1' ></input>  
      <button className='rounded-lg bg-blue-500 px-5 py-1 font-semibold '>Submit</button>


      </form>
    </div>
  )
}

export default Forms