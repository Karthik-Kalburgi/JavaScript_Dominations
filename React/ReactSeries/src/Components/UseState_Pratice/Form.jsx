import React, { useState } from 'react'

const Form = () => {
  const [formdata, setFormdata] = useState({name:'', email:''})

  const handleChange = (e) =>{
      const {name,value} = e.target;
    setFormdata(prev => ({...prev , [name]:value}));
  }
  return (
    <>
    <h1>Form Data Handiling Name and Email</h1>
    <div className='flex  flex-col mt-4'>
      <input
      name='name'
      onChange={handleChange}  
      className='px-4 py-2 border border-black outline-none rounded-md mb-4 '
      value={formdata.name} placeholder='Enter the name' ></input>
      <input
      name='email'
      onChange={handleChange}
       className='px-4 py-2 border border-black outline-none rounded-md '
       value={formdata.email} placeholder='Enter the email'></input>
    </div>

    <div className='mt-4'>
    <h1> {`The name is : ${formdata.name} `}  </h1>
    <h1> {`The Email is : ${formdata.email} `}  </h1>

    </div>
    </>
  )
}

export default Form