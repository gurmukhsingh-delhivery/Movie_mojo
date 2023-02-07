import Head from "next/head";
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import "tailwindcss/base.css";
import "tailwindcss/components.css";
import "tailwindcss/utilities.css";

const ProfilePage = () => {
  
  const [isEditable, setIsEditable] = useState(false);
//   const [details,setDetails] = useState({
//     name:"Gurmukh Singh",
//   });

  const [name,setName] = useState("Gurmukh Singh")
  const [profileImage,setProfileImage] = useState()

  const handleInputChange = (event) =>{
    setName({
        ...name,[event.target.name] : event.target.value
    })
  }

  const handleEditClick = async (event) => {
    // console.log(event.target.innerHTML);

   if(event.target.innerHTML == "Edit"){
      console.log("make  a request to change username")
   }

    setIsEditable(!isEditable);
  };


  return (
    <div class="h-screen bg-gray-200  dark:bg-gray-800   flex flex-wrap items-center  justify-center  ">
      <div class="container lg:w-2/6 xl:w-2/7 sm:w-full md:w-2/3    bg-white  shadow-lg    transform   duration-200 easy-in-out">
        <div class=" h-32 overflow-hidden">
          <img
            class="w-full"
            src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt=""
            
          />
        </div>
        <div class="flex justify-center px-5  -mt-12">

        {isEditable? <input
               type="file"
               accept="image/png, image/jpeg" />
               :
               <img
                class="h-32 w-32 bg-white p-2 rounded-full   "
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                alt=""
              />
            }
          
        </div>
        <div class=" ">
          <div class="text-center px-14">

            {isEditable? <input
               type="text"
               value={name}
               onChange={e => handleInputChange}   />
               :
               <h2 class="text-gray-800 text-3xl font-bold">{name}</h2>
            }
            
            <a
              class="text-gray-400 mt-2 hover:text-blue-500"
              href="https://www.instagram.com/immohitdhiman/"
              target="BLANK()"
            >
              @gurmukhnirman123
            </a>
            <p class="mt-2 text-gray-500 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,{" "}
            </p>

            <button className="w-32 mt-4  text-white bg-cyan-500 hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"  onClick={handleEditClick}>
            {isEditable ? "Save" : "Edit"}
          </button>
          </div>
          <hr class="mt-6" />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
