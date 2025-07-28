import React from 'react';

const CardsAmazon = () => {
  const data = [
    {
      name: 'Amazon Basics',
      image: 'https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW1hem9ufGVufDB8fDB8fHww',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
    },
    {
      name: 'Box of Amazon',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWxlY3Ryb25pY3xlbnwwfHwwfHx8MA%3D%3D',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      name: 'Developer',
      image: 'https://plus.unsplash.com/premium_photo-1681666713641-8d722b681edc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    }
  ];

  return (
    <div className='w-full min-h-screen flex items-center justify-center gap-10 bg-zinc-200 p-10 flex-wrap'>
      {data.map((elem, index) => (
        <div key={index} className='w-52 bg-white rounded-md shadow-md overflow-hidden'>
          <div className='w-full h-32 bg-zinc-300'>
            <img src={elem.image} alt={elem.name} className='w-full h-full object-cover' />
          </div>
          <div className='w-full px-3 py-4'>
            <h2 className='font-semibold text-base'>{elem.name}</h2>
            <p className='text-xs mt-3 text-zinc-600'>{elem.description}   </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsAmazon;
