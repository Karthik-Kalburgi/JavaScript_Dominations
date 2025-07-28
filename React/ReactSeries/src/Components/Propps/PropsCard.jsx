import React from 'react'

const PropsCard = ({name,age,city,Image}) => {
  return (
    <>
    <div className='w-60 bg-white  rounded overflow-hidden'>
    <img src={Image} className='w-full h-40 bg-blue-400'/> 
  
    <div className='w-full p-3 bg-white'>
      
    <h3 className='text-xl font-semibold mt-2'> {name} </h3>
    <h5 className='mt-2 text-semibold'> {age} </h5>
    <h6 className='mt-2 text-semibold'> {city} </h6>
    <button className='px-3 py-2 mt-2 text-xs text-white bg-blue-500 font-semibold rounded-md'>Add Friend</button>

  

    
      </div>

    </div>

    </>
  )
}

export default PropsCard