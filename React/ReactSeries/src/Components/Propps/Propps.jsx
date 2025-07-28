import React from 'react'



const Propps = ({chaha,kaku,color,colors}) => {
  return (
    <>
        <div>
      <h1>Props in React</h1>
      <button className={`px-2 py-1 ${color}  m-2   `}> {chaha}    </button>
      <button className={`px-2 py-3 bg-blue-400 m-2  `}> {kaku} </button>
      <button className={`px-2 py-3 ${color} m-2  `}> {kaku} </button>
      <button className={`px-2 py-3 ${colors} m-2  `}> {chaha} </button>
      <button className={`px-2 py-3 ${color} m-2  `}> {kaku} </button>
      <button className={`px-2 py-3 ${colors} m-2  `}> {chaha} </button>
      
     </div> 
    </>
    
  )
}

export default Propps