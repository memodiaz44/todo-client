/* eslint-disable */

import React, { useState, useEffect } from "react";
import List from "./Tasklist.js";
import { LoginForm } from "./Login.js";
import { Signup } from "./Signup.js";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import UserList from "../userComponnets/userTaskList.js";
import { Holatest } from "./holatest.js";
import { Dashboard } from "../userComponnets/Dashboard.js";
import { Otp } from "./OTP.js";
import { ResetPassword } from "./ResetPassword.js";


export default function Navbar({user, setUser, userInfo, setUserInfo}) {

  // const [userInfo, setUserInfo] =  useState({
  //   name: '',
  //   id: '',
  //   tasks: []
  // })

  useEffect(() => {
    console.log("userInfo.tasks changed:", userInfo.tasks);
  }, [userInfo.tasks]);

  



  const handleLogout = () => {
    if (user) {
      localStorage.removeItem('token');
      setUser(false);
    }
  };


  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-slate-800	 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#"
            >
            TODO
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
        
          {user ?  
              <>
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">      
            <li className="nav-item">
              <Link
                to="/dashboard" 
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              >
                <span className="ml-2">Dashboard</span>
              </Link>
            </li>
          </ul>

<ul className="flex flex-col lg:flex-row list-none lg:ml-auto">      
<li className="nav-item">
  <Link
    to="/usertask" 
    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
  >
    <span className="ml-2">List</span>
  </Link>
</li>
</ul>
          
     
</>

          
          : 
             <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
             <li className="nav-item">
               <Link
                 to="/" 
                 className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
               >
                 <span className="ml-2">Try</span>
               </Link>
             </li>
           </ul> 
           
           }

          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">   
            {user ? (
           <li className="nav-item">
            <button onClick={handleLogout}>Logout</button>
          </li>
          
          

        ) : (
          <li className="nav-item">
            <Link
                to="/login" // Define the route path
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              >
                <span className="ml-2">Login</span>
              </Link>
          </li>
        )}
     
          
          </ul>
          </div>
        </div>
   
      </nav>
    <div>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/login" element={<LoginForm user={user} setUser={setUser} setUserInfo={setUserInfo} />} />
        <Route path="/usertask" element={<UserList user={user} userInfo={userInfo}/> } />
        <Route path="/register" element={<Signup />} />
        <Route path="/hi" element={<Holatest/>}/>
        <Route path="/dashboard" element={<Dashboard user={user} userInfo={userInfo}/>}  />
        <Route path="/reset-password/:resetToken" element={<ResetPassword/>} />
        <Route path="/otp" element={<Otp/>} />
      </Routes>
      </div>


    </>
  );
}