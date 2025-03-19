import React from 'react'

function Card({image_url,name="Hello world"}) {
  return (
    <div className='border-2 border-white p-3'> 
      <img src={image_url} className='w-[250px] h-[250px]'></img>
      <h1 className='text-white text-xl text-center mt-4'>{name}</h1>
    </div>
  )
}

export default Card
