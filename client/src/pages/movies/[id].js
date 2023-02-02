// not able to load data from apis
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import MovieAbout from "../../components/movieAbout"

const Post = (props) => {

    return (
          <MovieAbout id = {parseInt(props.id)} />
    )
  
}

export const getServerSideProps= (context)=> {
  // console.log(context.query) 
  return {
      props: { 
         id: context.query.id //pass it to the page props
      }
  }
}


export default Post;