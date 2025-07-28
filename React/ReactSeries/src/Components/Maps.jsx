import React from 'react'

const Maps = () => {

  //Maps always creates a new array when a function called for each element for an array
  //Map does not change the original array
  //It does not execute when there is an empty array
  //Map is used to itterate over an array and return a new array with the results of calling a function for every element of an array


  const names = ['Karthik', 'Shery', 'Siva', 'Suresh','Sohail'];
  return (

    
    <div>
      {names.map((elem , index)=>(
        <div className='px-3 py-3 bg-zinc-400 rounded-md w-fit mt-4'>{elem} </div>
      ))}
    </div>
  )
}

export default Maps