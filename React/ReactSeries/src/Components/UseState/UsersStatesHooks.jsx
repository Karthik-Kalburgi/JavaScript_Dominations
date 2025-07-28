import React, { useState } from 'react'

const UsersStatesHooks = () => {
  const [val,setVal] = useState(false);
  return (
    <div >
    {/* // false MATH JAO True Baagh Jao */}
      <h1> {val ? "MATH JAO" : "BAAGH JAO"}  </h1>
      <button className={`px-3 py-3 ${val ? "bg-red-400" : "bg-blue-400"} text-white font-semibold`} onClick={(()=>setVal(()=>!val))} >Click Here</button>
    </div>
  )
}

export default UsersStatesHooks