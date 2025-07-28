import React, { useState } from 'react'

const UserStates = () => {
  const [score,setScore] = useState(false);
  return (
    <div>
    <h1> {score.toString()} </h1>
    <button  className='text-black px-3 rounded-lg py-3 bg-blue-500' onClick={(()=>setScore(!score))}  >Click here</button>
    </div>
  )
}

export default UserStates