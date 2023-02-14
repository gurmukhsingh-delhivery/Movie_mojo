"use client"
import React, { useEffect, useState } from 'react';
import Movie from './movie';
import Link from 'next/link';
import {nanoid} from "nanoid";
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { serverUrl } from '../../constants/serverDetails';

const  movieGrid = () => {
  const [data,setData] = useState(null);
  const [sortAscending,setSortAscending] = useState(true);
  const router = useRouter();
  useEffect(() =>{
    console.log("use effect")
    // console.log(serverUrl);
    const fetchData = async () => {

        // if(Cookies.get('userId')) setData()
        const response = await fetch(`${serverUrl}movies/`,{
          credentials: "include",
        });
        const json = await response.json();
        

        // added randomness to the sorting
        if(sortAscending == true && json.resp){
          json.resp.sort((a,b) =>{
            if(!a.rating || a.rating < 0) a.rating  = 0;
            if(!b.rating || b.rating < 0) b.rating  = 0;

             if(a.rating === 0 && b.rating === 0){
                 var randomArr =  [-1,0,1];
                 return randomArr[Math.floor(Math.random()*randomArr.length)];
             }

             return a.rating - b.rating;
          })
        }
        else if(json.resp){
          json.resp.sort((a,b) =>{
            if(!a.rating || a.rating < 0) a.rating  = 0;
            if(!b.rating || b.rating < 0) b.rating  = 0;

            if(a.rating === 0 && b.rating === 0){
              var randomArr =  [-1,0,1];
              return randomArr[Math.floor(Math.random()*randomArr.length)];
          }
            return b.rating - a.rating;
         })
        }

        // console.log("movies data is of type" ,typeof json.resp)

        

        if(json.resp) setData(json.resp)
        else router.push("/login")
        
    };
      fetchData();
  },[sortAscending])


  const handleClick = (event)=>{
     setSortAscending(!sortAscending);
  }
  
  console.log(data);
  
  if(!data) return <p>Loading... </p>
  // if(data == "Not authorized") return <h1>You are not allowed to access this page . First login</h1>

  return (
    <>
          
          <p className='inline-block float-right mt-5' style={{marginRight:"40px"}}> sort by.. <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' onClick={handleClick}>{sortAscending? "LOWEST RATING" : "HIGHEST RATING"}</button>  </p> 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-20">
             
            {data.map((movie,ind) => (
              <Link href = {`movies/${movie.id}`}>
                    <Movie key={ind} movie={movie} />
              </Link>
              
            ))}
          </div>
    </>
    
  )
}

export default movieGrid;