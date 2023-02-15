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
            <div className="grid grid-cols-2">

                <div className=" profileImage col-span-1">
                      {isEditable ? <form id = "theForm" enctype="multipart/form-data" action= {`http://localhost:4000/user/editUser/${userDetail.id}`} className= "mt-20" method="POST">
                            <input type="file" name="avatar"/>
                            <input
                                type="text"
                                name = "name"
                                value = {name}
                                onChange={e => setName(e.target.value)}
                                required
                                  />

                             <input type="hidden" name="user" value={JSON.stringify(userDetail)} required />
                        </form>
                        
                        :
                        <img
                          class=" bg-white p-2 "
                          src={`http://localhost:4000/${userDetail.avatar}`}
                          alt=""
                        />
                    }
                </div>
                <div className="details">
                       {isEditable? null
                       :

                       <h2 style={{marginLeft: "15px"}}>Name: {name}</h2>
                       }

                        <div className="text-center">

                            <h5  >Email : {userDetail.email}</h5>
                            <h5 style={{marginLeft: "-20px"}} >Date of birth : {userDetail.dob}   </h5>

                            <button className="w-32 mt-4  text-white bg-cyan-500 hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"  onClick={handleEditClick}>
                            {isEditable ? "Save" : "Edit"}
                            </button>
                        </div>
                </div>

            </div>
      </div>
    </div>
  );
};

export default ProfilePage;
