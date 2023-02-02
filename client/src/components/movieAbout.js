"use client"
import React, { useEffect, useState } from 'react';
import Movie from './movie';
import moviesData  from "../data/movies";


const MovieAbout = ({id})=>{
    id = parseInt(id);
    const [movie,setMovie] = useState(moviesData[id]);


    return (
        <div>
            <h1 className="text-2xl font-medium mb-2">{movie.Title}</h1>
            <p className="text-gray-700">{movie.Genre}</p>
            {/* <h1>hello</h1> */}
        </div>
    )

}

export default MovieAbout;