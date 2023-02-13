import Link from 'next/link';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react'

export default function Navbar(){

    // if(typeof window !== 'undefined') console.log(document.cookie);

    const [flag,setFlag] = useState(true);
    useEffect(()=>{

       if(typeof window != "undefined" && document.cookie) setFlag(false);
       else setFlag(true);

    //    console.log("user id is   " ,Cookies.get('userId'));

    } ,[])

    return(
        <> 
           
           <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
            <a href="#" className="font-medium">My App</a>
            <div className="hidden md:flex">
                
                {flag ? <ul>
                            <Link href="/register" className="px-4 py-2 mr-4">Register</Link>
                            <Link href="/login" className="px-4 py-2 mr-4">Login</Link>
                        </ul> : null}

                {!flag ? <ul>
                    <Link href="/movies" className="px-4 py-2">Home</Link>
                    <Link href="/userProfile">Profile</Link>
                    <Link href="http://localhost:4000/user/logout" className="px-4 py-2">Logout</Link>
                   </ul>:null }
            </div>
            <button className="md:hidden p-1 border border-white rounded-full">
                <svg className="fill-current text-white" viewBox="0 0 24 24">
                <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                </svg>
            </button>
            </nav>

        
        </>
    )
}