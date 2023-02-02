import React from 'react';
import Link from 'next/link';

const Card = ({movie,id}) => {
  let title = movie.Title;
  let img   = movie.Images[0];
  let genre = movie.Genre;
  let releaseDate = movie.Released;

  return (
      <>

            {/* <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-medium mb-2">{title}</h3>
                <p className="text-gray-700">{releaseDate}</p>
                <p className="text-gray-700">{genre}</p>

            </div> */}
            
            <div className="flex justify-center my-8">
              <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                  <img className="rounded-t-lg" src={img} alt=""/>
                </a>
                <div className="p-6">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>
                  <p className="text-gray-700 text-base mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae
                   lacus egestas, eleifend sem vel, lobortis lectus. Nulla id egestas ipsum.
                  </p>

                  
                </div>
              </div>
            </div>

        </>

  )
}

export default Card;