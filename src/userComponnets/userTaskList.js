import React, { useState } from 'react';
import UserFormula from './UserFormula';
import "../stylesheets/List.css";
import UserTask1 from './userTask.js';

const UserList = ({user, userInfo}) => {
  const apiUrl = process.env.REACT_APP_API

  const baseUrl = `${apiUrl}/todos`;  

  const [date, setDate] = useState(new Date());

  const [input, setInput] = useState("");
    const [tasks, setTasks] = useState([]);

    
 
    

    const addTask = (task) => {
        if (task.text.trim()) {
            task.text = task.text.trim() ;
            const updatedTasks = [task, ...tasks];
            setTasks(updatedTasks);
        }
    };

    const deleteTask = async (id) => {
      const baseUrl = `${apiUrl}/todos/${id}`;
    
      try {
        const res = await fetch(baseUrl, {
          method: 'DELETE',
          headers: {
            "Content-Type": "application/json",
          },
        });
    
        if (res.ok) {
          // If the DELETE request is successful (status code 200 or 204), you can update your UI.
          // Assuming you have a 'tasks' state variable and 'setTasks' function to update it:
          
          // Filter out the deleted task from the tasks array
          const updatedTasks = tasks.filter((task) => task.id !== id);
          setTasks(updatedTasks);
        } else {
          // Handle the error case here, such as displaying an error message to the user.
          console.error("Failed to delete task.");
        }
      } catch (err) {
        console.error(err);
      }
    };
    

    const completedTask = (id) => {
        const updatedTasks = tasks.map((task) => {
            if (task.id === id) {
                task.completed = !task.completed;
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    console.log(userInfo.name)


    return (
        <>
          {user ? (
            <div className='bg-zinc-700 border border-red-500 rounded-md mb-20 mr-20 ml-20 pb-10'>
              <h1 className="text-slate-100">Hi {userInfo.name}</h1>
              <UserFormula onSubmit={addTask} userInfo={userInfo.id} />
              <div className="bg-zinc-700" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {tasks.map((task) => (
                  <UserTask1
                    key={task.id}
                    id={task.id}
                    text={task.text}
                    date={task.date}
                    completed={task.completed}
                    deleteTask={deleteTask}
                    completedTask={completedTask}
                  />
                ))}
              </div>
            </div>
          ) : (
            <h1 className='text-slate-50'>User must be logged in</h1>
          )}
        </>
      
    );
    }

export default UserList;
