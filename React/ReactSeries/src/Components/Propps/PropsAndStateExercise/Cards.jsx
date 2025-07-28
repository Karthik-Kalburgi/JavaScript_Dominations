import React from 'react'

const Cards = ({data}) => {
  const {image,songName,artistName , added} = data;
  return (
    <div className='w-60 bg-red-200 p-4 rounded-md  flex gap-4 relative pb-8 mt-10'>
      <div className='w-20 bg-blue-400 rounded-md h-20'>
        <img className='w-full h-full object-cover  overflow-hidden ' src={image} alt='SOngs images' />
      </div>
      <div>
      <h2 className='font-semibold mt-2  leading-none text-black'> {songName} </h2>
      <h5 className='font-semibold text-black'> {artistName} </h5>
      </div>
    <button className= {`absolute bottom-0 left-1/2  px-3 py-2 ${added === false ? 'bg-orange-400' : 'bg-teal-400'} rounded-xl text-white -translate-x-[50%] translate-y-[50%] whitespace-nowrap`} > {added === false ? "Add to fav" : "Added"} </button>
  
    
    </div>
  )
}

export default Cards