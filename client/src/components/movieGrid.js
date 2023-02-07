"use client"
import React, { useEffect, useState } from 'react';
import Movie from './movie';
import Link from 'next/link';
import {nanoid} from "nanoid";

const  movieGrid = () => {
  const [data,setData] = useState(null);
  useEffect(() =>{
    console.log("use effect")
    const fetchData = async () => {
        const response = await fetch('http://localhost:4000/movies/',{
          credentials: "include",
        });
        const json = await response.json();
        setData(json.resp);
    };
      fetchData();
  },[])
  
  // console.log(data);
  
  if(!data) return <p>Loading... </p>

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((movie,ind) => (
        <Link href = {`movies/${movie.id}`}>
              <Movie key={ind} movie={movie} />
        </Link>
        
      ))}
    </div>
  )
}

export default movieGrid;