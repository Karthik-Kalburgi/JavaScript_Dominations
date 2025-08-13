import React, { useState } from 'react'

const IncrementTwice = () => {
  const [counter, setCounter] = useState(0);

  const twice = ()=>{
      setCounter(prev =>prev+1);
      setCounter(prev =>prev+1);
  }


  return (
    <>
    <h1 className='text-2xl'>Increment it Twice</h1>
    <div className='mt-4'>
    <p className='text-xl'> The Count is : {counter}  </p>

    </div>

    <div className='mt-4 flex justify-center gap-4 flex-col'>

    <button onClick={twice}
       className='px-5 text-black py-2 bg-green-400 rounded-md '>Increment By Two</button>
   
    </div>
    <p>{counter}</p>
    </>
  )
}

export default IncrementTwice