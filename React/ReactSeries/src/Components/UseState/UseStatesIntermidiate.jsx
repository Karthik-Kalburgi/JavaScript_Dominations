import React, { useState } from 'react'

const UseStatesIntermidiate = () => {
  const [val,setVal] = useState(12);
  return (
    <div>
      <h1 className='p-7 text-center items-center justify-between font-bold'> {val} </h1>
      <button className='px-5 py-3 bg-blue-500 text-white font-semibold' onClick={(()=>setVal((prev)=>(prev+1)))}  > Click For Change </button>
    </div>
  )
}

export default UseStatesIntermidiate