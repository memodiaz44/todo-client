import React, { useState } from 'react';
import "../stylesheets/Formula.css"
import { v4 as uuidv4 } from 'uuid';
import { formatDate } from '../componets/functions/formateDate';


const UserFormula = ({onSubmit, userInfo}) => {
  const apiUrl = process.env.REACT_APP_API

    console.log("this is th e ive " +  userInfo) 

    const baseUrl = `${apiUrl}/todos`;  

    const [date, setDate] = useState(new Date());

    const [input, setInput] = useState("");



    const manageChange = e => {
        setInput(e.target.value);
        console.log(e.target.value);

    }

    const manageSent = async (e) => {
        e.preventDefault();
      
        try {
          const res = await fetch(baseUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: uuidv4(),
              user_id: userInfo,
              title: input,
              date: formatDate(date)
            }),
          });
      
          if (res.ok) {
            // Request succeeded, process response
            const data = await res.json();
            console.log("Request successful:", data);
            const newTask = {
              id: data.todoId,
              text: input,
              completed: false, 
              date: data.date
            };
            setInput('')
            onSubmit(newTask);
          } else {
            // Request failed, handle the error
            console.error("Request failed with status:", res.status);
            // You can also display an error message to the user
          }
        } catch (error) {
          console.error("Error:", error);
        }
      };

    return (
    
<form className="w-full max-w-sm mx-auto" onSubmit={manageSent}>
  <div className="flex items-center justify-between border-b border-b-2 border-teal-500 py-2">
    <input
      className="appearance-none rounded-md border-none w-3/4 text-white-700 mr-3 py-1 px-2 leading-tight focus:outline-none bg-gray-500"
      type="text"
      placeholder="Write a task"
      value={input}
      name="text"
      onChange={manageChange}
    />
    <button
      className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
      type="submit"
    >
      Add Task
    </button>
  </div>
</form>


    
 )



}
export default UserFormula
