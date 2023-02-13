import React from 'react';
import Link from 'next/link';

const Movie = ({movie}) => {
  let title       = movie.title;
  let img         = movie.img.split(",")[0];
  let genre       = movie.genre;
  let releaseDate = movie.releaseDate;
  let id          = movie.id;

  console.log("in movie componenet",movie);


  return (
      <>

            {/* <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-medium mb-2">{title}</h3>
                <p className="text-gray-700">{releaseDate}</p>
                <p className="text-gray-700">{genre}</p>

            </div> */}
            
            <div className="flex justify-center my-8 h-full">
              <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                  <img className="rounded-t-lg" src={img} alt=""/>
                </a>
                <div className="p-6">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>
                  <p className="text-gray-700 text-base mb-4">
                      {movie.plot}
                  </p>

                  <p className="text-gray-700 text-base mb-4">
                      IMDB-RATING : {movie.imdb}
                  </p>

                  
                </div>
              </div>
            </div>

        </>

  )
}

export default Movie;