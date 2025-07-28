import React, { useState } from 'react'

const UserStatesAdvance = () => {
  const [elem,setElem] = useState({name : 'Karthik ' , isBanned : false});
  return (
    <div>
      <h1> Name is : {elem.name} </h1>
      <h2> isBanned is : {elem.isBanned.toString()}   </h2>
      <button className={`px-3 py-2 ${ elem.isBanned ? "bg-blue-400" : "bg-red-400" } font-semibold text-black`}  onClick={(()=>setElem({...elem , isBanned : !elem.isBanned}))}  > Click here</button>
    </div>
  )
}

export default UserStatesAdvance