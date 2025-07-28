import React from 'react'
import Cards from './Card'
import Card from './Cards'
import Forms from './Forms'

const FormExerciseMain = () => {
  const [users , setUsers]=([{name:'kk'}]);
  return (
    <>
    <div className='w-full h-screen bg-zinc-100 justify-center items-center'>
      <Cards users={users} />
      <Forms />
     
    </div>
    </>
  )
}

export default FormExerciseMain