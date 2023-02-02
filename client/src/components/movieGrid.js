"use client"
import React, { useEffect, useState } from 'react';
import Movie from './movie';
import Link from 'next/link';

const CardGrid = ({movies}) => {
  // const [data,setData] = useState([]);
  // useEffect(() =>{
  //   const fetchData = async () => {
  //       const response = await fetch('http://localhost:4000/movies/');
  //       const json = await response.json();
  //       setData(json);
  //   };
  //     fetchData();
  // },[])
   

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {movies.map((movie,ind) => (
        <Link href = {`movies/${ind}`}>
              <Movie key={ind} movie={movie} id  = {ind} />
        </Link>
        
      ))}
    </div>
  )
}

export default CardGrid;