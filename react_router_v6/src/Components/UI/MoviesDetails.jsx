import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const MoviesDetails = () => {

    // const {ID} = useParams();
    const movieData = useLoaderData();  
    console.log(movieData);

    const { Actor, Poster, Title, Type, Year, Plot, BoxOffice, imdbID } = movieData;

  return (
    <li className="border w-[330px] shadow-lg flex flex-col rounded overflow-hidden my-6">
      <div className="">
        <div className="">
          <img src={Poster} className="h-[360px] w-full" alt={Title} />
        </div>
        <div className="">
          <div className="">
            <h4 className="text-center text-2xl my-2 font-bold tracking-wider">{Title}</h4>
            <p className='text-gray-600 tracking-wider my-2'>{Plot}</p>
            <p className="text-lg text-gray-700">Type : {Type} </p>
            <button className="p-2 mt-2 bg-gray-600 w-full text-white font-bold text-xl">Watch now</button>
          </div>
        </div>
      </div>
    </li>
  )
}

export default MoviesDetails