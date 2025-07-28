import React, { useRef } from 'react'

const UseRefType = () => {

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(name.current.value);
    console.log(email.current.value);
    console.log(password.current.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}   >
      <input ref={name} type=' text ' placeholder='ENter Your Name'/>
      <input ref={email} type='email' placeholder= "Enter Your EMail" />
      <input ref={password} type='password' placeholder='Enter your password'/>
      <input type='submit' value='submit' />

      </form>
    </div>
  )
}

export default UseRefType