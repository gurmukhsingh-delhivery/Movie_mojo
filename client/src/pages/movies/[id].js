// not able to load data from apis
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import MovieAbout from "../../components/movieAbout"

const Post = () => {
    const router = useRouter();
    // let {id} = router.query;

    let name = router.asPath;

    console.log(name);
    return (
          <MovieAbout id = {0} />
    )
  
}



export default Post;