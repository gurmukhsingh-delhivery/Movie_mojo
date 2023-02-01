import React from 'react';
import Movie from './movie';

const CardGrid = ({ movies }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {movies.map(movie => (
        <Movie key={movie.id} id ={movie.id} title={movie.title} releaseDate = {movie.releaseDate} genre={movie.genre}  />
      ))}
    </div>
  )
}

export default CardGrid;