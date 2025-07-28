import React, { useState } from 'react'

const ControlledComponents = () => {
  // Controlled components are those components that are controlled by React state.
  // In a controlled component, form data is handled by the state within the component.
  // The value of the input fields is set by the state, and any changes to the input fields update the state.

  const [val,setVal] = useState({name : '', email:'', password:''});

  const handleClick = (e)=>{
    e.preventDefault();
    console.log(val);
    

  }
  return (
    <div>
      <form onSubmit={handleClick}>
        <input onChange={(e)=>setVal({...val,name:e.target.value})} type='text' placeholder='Enter Your Name' />
        <input onChange={(e)=>setVal({...val,email:e.target.value})} type='email' placeholder='Enter YOur EMail'/>
        <input onChange={(e)=>setVal({...val , password:e.target.value})} type='password' placeholder='Enter Your Password' />
        <input type='submit' />
      </form>
    </div>
  )
}

export default ControlledComponents