"use client"
import React, { useEffect, useState } from 'react';
import Movie from './movie';
import moviesData  from "../data/movies";


const MovieAbout = ({id})=>{
    // console.log(id);
    const [movie,setMovie] = useState(null);
    useEffect(() =>{
        console.log("useEffect")
        const fetchData = async () => {
            const response = await fetch(`http://localhost:4000/movies/` + `${id}`);
            const json = await response.json();

            console.log(json[0]);
            setMovie(json[0]);
        };
          fetchData();
      },[])

    if(!movie) return <p>STILL LOADING </p>

    console.log(movie);

    return (
        <div>
            <h1 className="text-2xl font-medium mb-2">{movie.title}</h1>
            <p className="text-gray-700">{movie.genre}</p>
            <img src = {movie.img} />
            {/* <h1>hello</h1> */}
        </div>
    )

}

export default MovieAbout;