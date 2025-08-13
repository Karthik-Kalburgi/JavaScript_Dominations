import React, { useState } from 'react'

const HandilingTextInput = () => {
  const [text, setText] = useState('');
  return (
    <>
    <h1>Handiling the Text Input</h1>
    <input
    className='border border-black outline-none  rounded-md'
    onChange={(e)=>setText(e.target.value)}
     value={text} placeholder='Type here'></input>
    <p>You Typed Here : {text}  </p>
    </>
  )
}

export default HandilingTextInput