import React from 'react'

const HandilingEvents = () => {
  const data = [{
    song : 'Mc Stan - Khuja Mat',
    artist : 'Mc Stan',
    description : 'Khuja Mat is a song by Mc Stan, an Indian rappe',

  },
  {
    song : 'Arijith Singh - Kesariya',
    artist : 'Arijith Singh',
    description : 'Kesariya is a romantic song sung by Arijith Singh, ',
  },
  {
    song : 'Seede maut',
    artist : 'Mc Stan',
    description : 'Seede Maut is a powerful track by Mc Stan, .',
  },


]

const handleDownload = (song)=>{
  // Logic to handle download
  alert(`Downloading ${song}`);
}
  return (
    <div className='w-full h-screen flex justify-center items-center flex-row gap-8 bg-zinc-400 '>
    {data.map((elem,index )=>(
 <div key={index}  className='w-52 h-40 bg-zinc-200 rounded-lg '>
      <h1 className='font-bold '> {elem.song}  </h1>
      <h4 className='font-semibold  mt-2  text-base '>{elem.artist }</h4>
      <p className='mt-4'> {elem.description} </p>
      <button onClick={handleDownload}  className='mt-2 bg-blue-400 px-3 rounded '>Download Now </button>

      </div>
    ))}
    </div>
     
  )
}

export default HandilingEvents