// not able to load data from apis
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import MovieAbout from "../../components/movieAbout"

const Post = (obj) => {

    
    console.log(obj)
    return (
          <MovieAbout id = {0} />
    )
  
}


export default Post;