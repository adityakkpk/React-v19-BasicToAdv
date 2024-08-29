import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { Card } from '../Components/UI/Card';

const Movies = () => {
  const moviesData = useLoaderData();
  console.log(moviesData);

  return (
    <ul className="container flex flex-wrap justify-center items-center gap-3 ">
      {moviesData &&
        moviesData.Search.map((curMovie) => {
          return <Card key={curMovie.imdbID} curMovie={curMovie} />;
        })}
    </ul>
  );
}

export default Movies