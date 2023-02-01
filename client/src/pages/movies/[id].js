// not able to load data from apis

import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import movies from '../../data/movies'

const Post = ({props}) => {

  const router = useRouter();
  let { id } = router.query;
  id  = parseInt(id);


  const [movie,setMovie] = useState(null);

  useEffect(() =>{
      const fetchData = async () => {
        const response = await fetch(`http://localhost:4000/movies/1`);
        const json = await response.json();
        setMovie(json);
        console.log(JSON.stringify(json))
        
    };

    fetchData();
  },[])


  if(!movie){
    return (
      <div>
         <p className="text-gray-700">no data fetched from api</p>
      </div>
    )
  }
  else {
    return (
      <div>
        <h1 className="text-2xl font-medium mb-2">{movie[0].title}</h1>
        <p className="text-gray-700">{movie[0].genre}</p>
      </div>
    )
  }

  // console.log(card)
 
}

export default Post;