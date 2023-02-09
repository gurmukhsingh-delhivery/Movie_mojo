"use client"
import React, { useEffect, useState } from 'react';
import Movie from './movie';
import Link from 'next/link';
import {nanoid} from "nanoid";
import Cookies from 'js-cookie';

const  movieGrid = () => {
  const [data,setData] = useState(null);
  useEffect(() =>{
    console.log("use effect")
    const fetchData = async () => {

        // if(Cookies.get('userId')) setData()
        const response = await fetch('http://localhost:4000/movies/',{
          credentials: "include",
        });
        const json = await response.json();

        if(json.resp) setData(json.resp)
        else setData(json.message)
        
    };
      fetchData();
  },[])
  
  // console.log(data);
  
  if(!data) return <p>Loading... </p>
  if(data == "Not authorized") return <h1>You are not allowed to access this page . First login</h1>

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