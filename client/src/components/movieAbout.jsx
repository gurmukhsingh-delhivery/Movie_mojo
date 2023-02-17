"use client"
import React, { useEffect, useState } from 'react';
import Movie from './movie';
import moviesData  from "../data/movies";
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { serverUrl } from '../../constants/serverDetails';


const MovieAbout = ({id})=>{
    // console.log(id);
    const [movie,setMovie] = useState(null);
    const router = useRouter();

    const [upvoteColor,setUpvoteColor] = useState("black")
    const [downvoteColor,setDownVoteColor] = useState("black")
    useEffect(() =>{
        console.log("useEffect")
        const fetchData = async () => {
            const response = await fetch(`${serverUrl}movies/` + `${id}`,{
                credentials:"include"
            });
            let json = await response.json();
            // const json = await resp.json();

            // console.log("movieAbout ", json);

         
            if(json.resp){
                    setMovie(json.resp[0]);
                    
                    let obj = {};
                    obj.userId = Cookies.get('userId');
                    obj.movieId = id;
        
                    const res = await fetch(`${serverUrl}movies/getUserRating`, {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        credentials: "include",
                        body: JSON.stringify(obj),
                    });
                    
                    const colorResponse = await res.json();
                    let colorData = null;
                    if(colorResponse.resp) colorData = colorResponse.resp;
                    else colorData = {value: 0};

                    console.log(colorData);
                    if(colorData.value == 1){
                      setUpvoteColor("green");
                      setDownVoteColor("black")
                    }
                    else if(colorData.value == -1){
                      setUpvoteColor("black");
                      setDownVoteColor("red")
                    }
                    
                    console.log(movie);
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
    let imageList = movie.img.split(",");
    // console.log("list of images  ",imageList);

    const handleClick = async (event)=>{
        try{
            let obj= {};
            if(event.target.id == "upvote") obj.val=  1;
            else obj.val = -1;

            if(obj.val == 1){

                if(upvoteColor == "green"){
                  setUpvoteColor("black");
                  obj.val = 0;
                }
                else{
                  setDownVoteColor("black");
                  setUpvoteColor("green");
                }
                
                
            }
            else{
                if(downvoteColor == "red"){
                  setDownVoteColor("black");
                  obj.val = 0;
                }
                else{
                  setDownVoteColor("red");
                  setUpvoteColor("black");
                }
                
                
            }

        
            
            obj.userId = Cookies.get('userId');
            obj.movieId = id;

            const res = await fetch(`${serverUrl}movies/ratings`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify(obj),
            });

            if(res.ok){
                console.log("ratings sent successfully")
            }
            else console.log("ratings are not sent")
        }
        catch(err){
             console.log(err);
        }
    }

    return (

       <section className='grid lg:grid-cols-3 gap-5 p-20 max-w-300px max-h-800px'>

         <div className="img lg:col-span-2">
         <img
                src={imageList[0]}
                alt="Image"
                className="rounded-lg h-full w-full object-fill"
              />
         </div>

         <div className="content lg:col-span-1 bg-white">
            <h3 className="text-xl font-bold mb-2">{movie.title}</h3>
                  <p className="text-gray-700 mb-4"> {movie.plot} </p>
              <ul className="list">
                  <li className="mb-2">
                      <span className="font-bold">Genre:</span> {movie.genre}
                    </li>
                    <li className="mb-2">
                      <span className="font-bold">releaseDate:</span>{" "}
                      {movie.released}
                    </li>
                    <li className="mb-2">
                      <span className="font-bold">Actors:</span>{" "}
                      {movie.actors}
                    </li>

                    <li className="mb-2">
                      <span className="font-bold">Director:</span>{" "}
                      {movie.director}
                    </li>

                    <li className="mb-2">
                      <span className="font-bold">Awards:</span>{" "}
                      {movie.awards}
                    </li>
              </ul>

              <div id = "ratings" className='mt-8'>
                    <p className="rating inline">Rate this post: </p>
                    <div className="rating inline">
                        <i className="fa-solid fa-thumbs-up mx-4 fa-xl" style={{color: upvoteColor}} id='upvote' onClick={handleClick}></i>
                        <i className="fa-solid fa-thumbs-down mx-4 fa-xl" style={{color: downvoteColor}} id = "downvote" onClick={handleClick}></i>
                    </div>
                   
                  
              </div>
         </div>
           
       </section>
    );

}

export default MovieAbout;