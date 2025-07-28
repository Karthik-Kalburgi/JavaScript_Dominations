import React from 'react'
import Home from './Home'

//Context api we will use to pass data through the component tree without having to pass props down manually at every level.
//IN context api withour using props drilling we can wrap the data in one place and we can access anywhere in the component tree.
const ContextApi = () => {
  return (
   <>
    <Home />
   </>
  )
}

export default ContextApi