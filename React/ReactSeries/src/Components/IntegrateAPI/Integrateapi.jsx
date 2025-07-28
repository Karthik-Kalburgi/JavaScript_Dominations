import React from 'react'
import axios from 'axios'

const Integrateapi = () => {
  
  const getproducts = ()=>{
    const api = ('https://fakestoreapi.in/api/products')
    axios.get(api).then(products =>{
      console.log(products);

      
    }).catch(err =>console.log(err));
  }
  return (
    <div>
    <h1 className='font-semibold  text-2xl'>Calling the api by clickig the button</h1>
          <button onClick={getproducts}  className='px-3 py-2 mt-10 justify-center items-center bg-red-500 rounded-lg'>Get Api</button>
    </div>
  )
}

export default Integrateapi