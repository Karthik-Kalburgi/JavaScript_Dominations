import React, { useState } from 'react'

const Counter = () => {
  const [counter, setcounter] = useState(0)
  return (
    <>
    <h1>Counter </h1>
    <h1>The counter us {counter}</h1>
    <div className='flex  gap-2 items-center justify-center mt-5 '>
      
    <button className='px-3 py-2 bg-blue-400 rounded-md text-white' onClick={()=>setcounter(counter+1)} >Click me </button>
    <button className='px-3 py-2 bg-blue-400 rounded-md text-white' onClick={()=>setcounter(counter-1)} >Click me </button>

    </div>
    </>
  )
}

export default Counter