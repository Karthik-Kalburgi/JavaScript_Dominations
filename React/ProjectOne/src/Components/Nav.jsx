import React from 'react'

const Nav = () => {
  return (
    <>
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

    </>
  )
}

export default Nav