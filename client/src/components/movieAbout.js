"use client"
import React, { useEffect, useState } from 'react';
import Movie from './movie';
import moviesData  from "../data/movies";
import { useRouter } from 'next/router';


const MovieAbout = ({id})=>{
    // console.log(id);
    const [movie,setMovie] = useState(null);
    const router = useRouter();
    useEffect(() =>{
        console.log("useEffect")
        const fetchData = async () => {
            const response = await fetch(`http://localhost:4000/movies/` + `${id}`,{
                credentials:"include"
            });
            const json = await response.json();

            if(json.resp){
                setMovie(json.resp[0]);
                console.log(movie)
            }
            else{
                router.push("/login")
            }

            // console.log(json.resp[0]);
            // setMovie(json.resp[0]);
        };
          fetchData();
      },[])

    if(!movie) return <p>STILL LOADING </p>
    // if(movie == "Not authorized") return <h1>You are not allowed to access this page . First login</h1>

    console.log(movie);

    return (
      // <div>
      //     <h1 classNameName="text-2xl font-medium mb-2">{movie.title}</h1>
      //     <p classNameName="text-gray-700">{movie.genre}</p>
      //     <img src = {movie.img} />
      //     {/* <h1>hello</h1> */}
      // </div>

      <body className="flex items-center h-screen bg-gray-200">
        <div className="h-4/5 w-full mx-6">
          <div className="flex h-full bg-white">
            <div className="w-2/3">
              <img
                src={movie.img}
                alt="Image"
                className="rounded-lg h-full w-full object-fill"
              />
            </div>
            <div className="w-2/3 px-6 py-4">
              <h3 className="text-xl font-bold mb-2">{movie.title}</h3>
              <p className="text-gray-700 mb-4">
                Pellentesque eu cursus eros. Nam dignissim sem a volutpat
                auctor. Vivamus massa velit, pharetra nec diam at, interdum
                congue lectus. Vivamus quis sem tincidunt, accumsan dolor non,
                fermentum magna. Suspendisse scelerisque est nec est tristique,
                nec venenatis diam placerat. Class aptent taciti sociosqu ad
                litora torquent per conubia nostra, per inceptos himenaeos.
                Fusce at tellus vitae ligula pretium convallis eget eu sapien.
              </p>
              <ul className="list-none">
                <li className="mb-2">
                  <span className="font-bold">Genre:</span> {movie.genre}
                </li>
                <li className="mb-2">
                  <span className="font-bold">releaseDate:</span>{" "}
                  {movie.releasedate}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </body>
    );

}

export default MovieAbout;