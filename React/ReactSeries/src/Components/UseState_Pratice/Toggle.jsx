import React, { useState } from 'react'

const Toggle = () => {
  const [Ison, setIson] = useState(false);
  return (
    <>
    <div className='justify-between mt-4'>
    <h1 className='mt-4'>Toggle On and Off Use True False</h1>
    <h1 className='mt-4'>The Bulb is {Ison ? "ON" : "OFF"}</h1>
    <button onClick={()=>setIson(!Ison)}  className='px-3 py-2 mt-6 text-white bg-blue-400 rounded-md '>Toggle Here</button>
    </div>
    </>
  )
}

export default Toggle