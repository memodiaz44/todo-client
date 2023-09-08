/* eslint-disable */

import React, { useState, useEffect } from 'react';
import { formatDate } from '../componets/functions/formateDate';



export function Dashboard({ user, userInfo }) {
  const apiUrl = process.env.REACT_APP_API

  const [tasks, setTasks] = useState([]);
  const [date, setDate] = useState(new Date());


  const getTasks = async (id) => {
    const urlTasks = `${apiUrl}/users/${id}/todos`; // Use userInfo.id

    try {
      const res = await fetch(urlTasks, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (res.ok) {
        const data = await res.json(); // Extract JSON data from the response
        setTasks(data); // Update tasks with the data
      } else {
        console.error('Failed to fetch tasks.');
      }
    } catch (err) {
      console.error(err);
    }
  };


  useEffect(() => {
    // Fetch tasks when userInfo changes
    getTasks(userInfo.id);
  }, [userInfo]);


const formated = (date) => {
    const parts = date.split("T"); // Split the date and time parts
    return parts[0];

}

  const editTask = async (id) => {
    // Prompt the user for the updated task title and date
    const updatedTitle = prompt("Enter the updated task title:");
  
    // Check if the user canceled the prompt
    if (updatedTitle === null) {
      return;
    }
  
    // Create an updatedTask object
    const updatedTask = {
      title: updatedTitle,
      date: formatDate(date),
    };
  
    try {
      // Send a PUT request to update the task on the server
      const baseUrl = `http://localhost:8000/todos/${id}`;
      const response = await fetch(baseUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTask),
      });
  
      if (response.ok) {
        // Task updated successfully on the server
        const updatedTasks = tasks.map((task) => {
          if (task.id === id) {
            task.title = updatedTitle;
            task.date = date;
          }
          return task;
        });
  
        // Update the tasks state with the edited task
        setTasks(updatedTasks);
      } else {
        // Handle the error case here, such as displaying an error message to the user.
        console.error('Failed to update task.');
      }
    } catch (err) {
      console.error(err);
    }
  };
  


  const deleteTask = async (id) => {
    const baseUrl = `http://localhost:8000/todos/${id}`;

    try {
      const res = await fetch(baseUrl, {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        // Filter out the deleted task from the tasks array
        const updatedTasks = tasks.filter((task) => task.id !== id);
        
        // Update the tasks state with the updated array
        setTasks(updatedTasks);
      } else {
        // Handle the error case here, such as displaying an error message to the user.
        console.error("Failed to delete task.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {user ? (
       <div className="text-slate-50">
       <h1 className="text-slate-50 ">Task lists {tasks.length}</h1>
       {tasks.map((task) => (
         <div className="bg-slate-600 mr-20 ml-20 hover:bg-sky-700 rounded-sm mb-1 p-2" key={task.id}>
           <div className="flex justify-between items-center">
             <div>
             {task.title} {task.updated ? `Updated At ${task.date}` : `Created At ${task.date}`}
             </div>
             <div className="flex space-x-2">
               <button className="bg-zinc-800 hover:bg-pink-700 rounded-sm p-1" onClick={() => deleteTask(task.id)}>Delete</button>
               <button className="bg-zinc-800 hover:bg-pink-700 rounded-sm p-1" onClick={() => editTask(task.id)}>Edit</button>
             </div>
           </div>
         </div>
       ))}
     </div>
     
      ) : (
        <div className='flex justify-between items-center'>
        <h1 className='text-slate-50'>User must be logged in</h1>
        <a href="/login">Back to login</a>
        </div>
      )}
    </>
  );
}
