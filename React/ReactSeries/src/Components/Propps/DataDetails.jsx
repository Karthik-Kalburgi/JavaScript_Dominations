import React from 'react'
import PropsCard from './PropsCard'


const DataDetails = () => {
  const data = [{name:'jhon', age: 30, city: 'New York' , Image : 'https://images.unsplash.com/photo-1542190891-2093d38760f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG1hbGV8ZW58MHx8MHx8fDA%3D'},
    {name:'doe', age: 25, city: 'Los Angeles' , Image : 'https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbGV8ZW58MHx8MHx8fDA%3D'},
    {name:'alice', age: 28, city: 'Chicago' , Image : 'https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1hbGV8ZW58MHx8MHx8fDA%3D'},
    {name:'bob', age: 22, city: 'Houston' , Image : 'https://plus.unsplash.com/premium_photo-1666298858421-3765c17bcf80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbGV8ZW58MHx8MHx8fDA%3D'},
    {name:'charlie', age: 35, city: 'Phoenix' , Image : 'https://images.unsplash.com/photo-1525457136159-8878648a7ad0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbGV8ZW58MHx8MHx8fDA%3D'},
    {name:'eve', age: 29, city: 'Philadelphia' , Image : 'https://images.unsplash.com/photo-1524538198441-241ff79d153b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbGV8ZW58MHx8MHx8fDA%3D'},


  ]

  return (
    <div className='w-full h-screen bg-zinc-300  gap-4 items-center justify-center flex flex-row flex-wrap '>
    {data.map((elem,index)=>(
      <PropsCard key={index} name={elem.name} age={elem.age} city={elem.city} Image={elem.Image}  />
    ))}
      
      
    </div>
  )
}

export default DataDetails