import { useState } from "react"
import { useNavigate } from "react-router-dom";
 

export function Signup ()  {
  const navigate = useNavigate()
  const apiUrl = process.env.REACT_APP_API


    const baseUrl = `${apiUrl}/users`;  
    const [name, setName] =  useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
    
    try {
        const res = await fetch(baseUrl, {
          method: "POST",
          body: JSON.stringify({
            name: name,
            email:  email, 
            password: password
         }),
         headers: { "Content-Type": "application/json" },
       });
    
       if (res.status === 201) {
        console.log("User registered successfully");
        navigate('/login')
        // You can redirect or show a success message here
      } else {
        console.error("User registration failed");
        // Handle error or show an error message
      }
    } catch (error) {
      console.error("An error occurred:", error);
      // Handle error or show an error message
    }
    }


    return(
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign up your account
        </h1>
        <form class="space-y-4 md:space-y-6" action="#"  onSubmit={handleSubmit}>
        <div>
                <label 
                for="name" 
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                <input
                 type="name" 
                 name="name" 
                 id="name"
                 class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="jhon doe" 
                  value={name}
                  required=""
                  onChange={(e) => setName(e.target.value)}
                  />
            </div>
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
            <div class="flex items-center justify-between">
                <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input 
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" 
                      required=""/>
                    </div>
                    <div class="ml-3 text-sm">
                      <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                    </div>
                </div>
                <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
            </div>
            <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
         
        </form>
    </div>
    )
}