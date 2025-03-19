import { useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import Card from './component/Card'

function App() {

  let response = useFetch('https://api.escuelajs.co/api/v1/products')
  console.log(response.data);
  console.log("loading", response.loading);
  // loading=true

  return (
    <>
      <div className='bg-black w-full h-full p-5'>
        <h1 className='text-center text-white text-3xl m-5 font-bold'>Photos</h1>
        {
          response.loading ?
            (
              <div className='flex justify-center items-center h-screen'>
                <div className='animate-spin rounded-full h-32 w-32 border-b-5 border-gray-900'></div>
              </div>
            ) :
            (response.error !== null ?
              (<div className='flex justify-center items-center h-screen'>
                <p className='text-center text-white text-xl'>😔<br></br> Err: {response.error}</p>
              </div>)
              : (
                <div className='flex flex-wrap justify-center gap-10 '>
                  {
                    response.data.map((item) => {
                      return (
                        <Card key={item.id} image_url={item.category.image} name={item.category.name} />
                      )
                    }
                    )
                  }
                </div>
              )
            )}
      </div>
    </>
  )
}

export default App
