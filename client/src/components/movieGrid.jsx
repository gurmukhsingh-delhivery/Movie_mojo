"use client"
import React, { useEffect, useState } from 'react';
import Movie from './movie';
import Link from 'next/link';
import {nanoid} from "nanoid";
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

const  movieGrid = () => {
  const [data,setData] = useState(null);
  const [sortAscending,setSortAscending] = useState(true);
  const router = useRouter();
  useEffect(() =>{
    console.log("use effect")
    const fetchData = async () => {

        // if(Cookies.get('userId')) setData()
        const response = await fetch('http://localhost:4000/movies/',{
          credentials: "include",
        });
        const json = await response.json();

        if(sortAscending == true){
          json.resp.sort((a,b) =>{
             return a.rating - b.rating;
          })
        }
        else{
          json.resp.sort((a,b) =>{
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
  
  // console.log(data);
  
  if(!data) return <p>Loading... </p>
  // if(data == "Not authorized") return <h1>You are not allowed to access this page . First login</h1>

  return (
    <>
          <div className="button mt-20" style={{display:"flex",justifyContent:"center"}}>
             <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' onClick={handleClick}>{sortAscending? "ASCENDING" : "DESCENDING"}</button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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