import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Movies = () => {
  const moviesData = useLoaderData();
  console.log(moviesData);

  return (
    <div className='flex flex-col gap-2 justify-center items-center my-3'>{moviesData.name}</div>
  )
}

export default Movies