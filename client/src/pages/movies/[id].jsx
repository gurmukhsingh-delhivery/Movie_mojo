// not able to load data from apis
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import MovieAbout from "../../components/movieAbout"

const Post = () => {
    const router = useRouter();
    const [id,setId] = useState(null);
    useEffect(()=>{
        if(!router.isReady) return;
    
        // codes using router.query
        console.log("setting the id")
        setId(router.query.id);
    
    }, [router.isReady]);

    if(!id) return <p>Loading...</p>
    
    // console.log(id);
    return (
    
          <MovieAbout id = {id} />
    )
  
}



export default Post;