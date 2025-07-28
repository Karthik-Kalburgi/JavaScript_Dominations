import React, { useState } from 'react'
import Navbar from './Navbar'
import Cards from './Cards'

const Songs = () => {
  const data = [
    {
    image : 'https://images.unsplash.com/photo-1752352343628-5067de7bb84f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D',
    songName : 'allen walker',
    artistName : 'kk',
    added : false,

  },
   {
    image : 'https://plus.unsplash.com/premium_photo-1752192843927-45c7bcf42688?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D',
    songName : 'Not Afraid',
    artistName : 'Eminum',
    added : false,

  },
   {
    image : 'https://images.unsplash.com/photo-1746483965775-bab61a5c68ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D',
    songName : 'Dog',
    artistName : 'Agent P',
    added : false,

  },
   {
    image : 'https://images.unsplash.com/photo-1751719036803-5d85c5351368?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D',
    songName : 'Seede mauth',
    artistName : 'Nanchaku',
    added : true,

  },
   {
    image : 'https://images.unsplash.com/photo-1682687982185-531d09ec56fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MXx8fGVufDB8fHx8fA%3D%3D',
    songName : 'Hosh mai aa',
    artistName : 'MC STAN',
    added : true,

  },

]
const [songData,setSongData] = useState(data);
  return (
    <div>
      <Navbar />
      <div className='flex gap-4 mt-12 flex-wrap'>
      {songData.map((obj)=>(
        <Cards data={obj} />
      ))}


      </div>
    </div>
  )
}

export default Songs