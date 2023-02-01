"use client"
import React, { useEffect, useState } from 'react';
import Movie from './movie';

const CardGrid = () => {

  const [data,setData] = useState([]);
  useEffect(() =>{
    const fetchData = async () => {
        const response = await fetch('http://localhost:4000/movies/');
        const json = await response.json();
        setData(json);
    };
      fetchData();
  },[])
   

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map(movie => (
        <Movie key={movie.id} id ={movie.id} title={movie.title} releaseDate = {movie.releaseDate} genre={movie.genre}  />
      ))}
    </div>
  )
}

export default CardGrid;