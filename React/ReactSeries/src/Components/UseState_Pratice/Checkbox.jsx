import React, { useState } from 'react'

const Checkbox = () => {
  const [Ischecked, setIschecked] = useState(false);
  return (
    <>

    <h1>Whem check box is checked and unChecked T/C</h1>
    <label>
    <input type='checkbox'
    Ischecked={Ischecked}
    onChange={()=>setIschecked(!Ischecked)}
     ></input>
     </label>
     <p>{Ischecked ? "ON" : 'OFF' }</p>
    </>
  )
}

export default Checkbox