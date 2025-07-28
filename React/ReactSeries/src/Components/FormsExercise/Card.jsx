import React from 'react'
import Cards from './Cards'

const Card = ({users}) => {
  return (
    <>
    <div className='w-full h-96 max-h-96 overflow-auto rounded-xl bg-blue-200 mt-40 p-4 flex justify-center gap-4 flex-wrap'>
    
    {users.map((item,index)=>{
      return(
    
    <Cards key={index} users={users} />
)})}
    </div>
    </>
  )
}

export default Card