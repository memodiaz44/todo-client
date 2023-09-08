import React, { useState, useEffect } from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";



 export  function LoginForm({setUser, setUserInfo}) {

  const apiUrl = process.env.REACT_APP_API
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const baseUrl = `${apiUrl}/user/login`;  
    const resetUrl = `${apiUrl}/reset-password`;
    const [loginError, setLoginError] = useState(""); // State to store login error message
    const navigate = useNavigate()

    const handlePasswordReset = async (e) => {
      e.preventDefault();
    
      if (!email) {
        alert('Email is required');
        return;
      }
    
      try {
        const response = await fetch(resetUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
          }),
        });
    
        if (response.ok) {
          alert(`code sent to ${email}`)
          console.log('Password reset request sent successfully');
          // Optionally, show a success message to the user
        } else {
          console.error('Password reset request failed');
          // Optionally, show an error message to the user
        }
      } catch (err) {
        console.error('Error sending password reset request:', err.message);
        // Optionally, show an error message to the user
      }
    };
    
     
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!email || !password) {
        alert('Email and password are required');
        return;
      }

      try {
        const response = await fetch(baseUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        });
  
        if (response.ok) {
          const data = await response.json();
          const { email, name, user_id, token } = data;
          console.log("Login successful:", data.token);


       
            setUserInfo({
              name: data.name,
              id: data.id,
              tasks: data.tasks || []   
            })
            localStorage.setItem('userInfo', JSON.stringify({
              name: data.name,
              id: data.id,
              tasks: data.tasks || []
            }));



         
          setUser(true)       

          localStorage.setItem('token', data); // Store the JWT in local storage

        
         

         navigate('/usertask')

  
          setLoginError("");
        
        } else {
          const errorData = await response.json();
          setEmail("");
          setPassword("");
          console.log("Login failed:", errorData);
          setLoginError(errorData.message);
        }
      } catch (err) {
        console.error(err);
      }
    };

  return ( 
<div class="p-6 space-y-4 md:space-y-6 sm:p-8 ">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <form class="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
                  <div>
                      <label 
                      for="email" 
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input
                       type="email" 
                       name="email" 
                       id="email"
                       class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@company.com" 
                        value={email}
                        required=""
                        onChange={(e) => setEmail(e.target.value)}
                        />
                  </div>
                  <div>
                      <label 
                      for="password" 
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input 
                      type="password" 
                      name="password" 
                      id="password" 
                      value={password}
                      placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                      required=""
                      onChange={(e) => setPassword(e.target.value)}
                      />
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input 
                            id="remember"
                            aria-describedby="remember"
                            type="checkbox"
                            class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" 
                            required=""/>
                          </div>
                          <div className="ml-3 text-sm">
                            <label for="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <a href="/reset" 
                      className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                      onClick={handlePasswordReset}
                      >Forgot password?</a>
                  </div>
                  <button type="submit" className="w-50% text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-sky-700 hover:bg-sky-500/100">Sign in</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet?    <a href="/register">Sign up</a>
                  </p>
              </form>
          </div>
  );
}