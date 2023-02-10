import Head from "next/head";
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import axios from "axios";
import Cookies from 'js-cookie';

import "tailwindcss/base.css";
import "tailwindcss/components.css";
import "tailwindcss/utilities.css";

const ProfilePage = () => {

  const [isEditable,setIsEditable] = useState(false);
  const [name,setName] = useState("Gurmukh Singh")

  const [userDetail,setUserDetail] = useState(null);
  const [profileImage,setProfileImage] = useState(null);

  useEffect(() =>{
        const fetchData = async () => {
          const response = await fetch(`http://localhost:4000/user/${Cookies.get('userId')}`,{
            credentials:"include"
          });
          const json = await response.json();

          // console.log(json.resp[0]);
          console.log(json);
          if(json.message) setUserDetail(json.message)
          else{
              setUserDetail(json[0]);
              setName(json[0].name)
              console.log(json[0]);
          }
          
        };
        fetchData();
  },[])

  const handleEditClick = async (event) => {
    console.log(event.target.innerHTML);

    if(event.target.innerHTML === "Save"){
      document.getElementById('theForm').submit();
    }
    setIsEditable(!isEditable);
  };


 if(!userDetail) return <p>STILL LOADING </p>
 if(userDetail == "Not authorized"){
  const router = useRouter();
  router.push("/login")
 }

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

        {isEditable? 
                        <form id = "theForm" enctype="multipart/form-data" action= {`http://localhost:4000/user/editUser/${userDetail.id}`} className= "mt-20" method="POST">
                            <input type="file" name="avatar"/>
                            <input
                                type="text"
                                name = "name"
                                value = {name}
                                onChange={e => setName(e.target.value)}
                                required
                                  />

                             <input type="hidden" name="user" value={JSON.stringify(userDetail)} />
                        </form>
               :

               <div>
                      <img
                          class="h-32 w-32 bg-white p-2 rounded-full   "
                          src={`http://localhost:4000/${userDetail.avatar}`}
                          alt=""
                        />

                      <h2>Name: {name}</h2>
               </div> 
            }

               
          
        </div>
        <div class=" ">
          <div class="text-center px-14">

            <h5  >Email : {userDetail.email}</h5>
            <h5  >Date of birth : {userDetail.dob}   </h5>
            
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
