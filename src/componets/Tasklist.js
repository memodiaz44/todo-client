/* eslint-disable */

import React, { useState } from 'react'
import Formula from './Formula'
import "../stylesheets/List.css"
import Task1 from './task.js';

const List = () => {
    const [tasks, setTask] = useState([]);
  
    const addTask = (task) => {
      if (task.text.trim()) {
        task.text = task.text.trim();
        const updatedTask = [task, ...tasks];
        setTask(updatedTask);
      }
    };
  
    const deleteTask = (id) => {
      const updatedTask = tasks.filter((task) => task.id !== id);
      setTask(updatedTask);
    };
  
    const completedTask = (id) => {
      const updatedTask = tasks.map((task) => {
        if (task.id === id) {
          task.completed = !task.completed;
        }
        return task;
      });
      setTask(updatedTask);
    };
  
    return (
      <>
       <div className='bg-zinc-700 border border-red-500 rounded-md mb-20 mr-20 ml-20'>
        <h1 className='text-slate-50'>CREATE TASK</h1>
        <Formula onSubmit={addTask} />
        <div className="task-list-conteiner">
          {tasks.map((task) => (
            <Task1
              key={task.id}
              id={task.id}
              text={task.text}
              completed={task.completed}
              deleteTask={deleteTask}
              completedTask={completedTask}
            />
          ))}
    </div>
    </div>
    </>
)
}

export default List