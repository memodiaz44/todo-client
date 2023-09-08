import React from 'react';
import '../stylesheets/task.css'
import { AiOutlineCloseCircle } from "react-icons/ai";


const UserTask1 = ({id, text, date, completed, completedTask, deleteTask }) => {

    console.log('date:', date); // Add this line to log the task

return(
    <div 
    className={
    completed ? 'task-conteiner complete' : 'task-conteiner'
     }>
        <div 
        className='task-text'
        onClick={() => completedTask(id)}>
            {text} 
            {date && <span className='text-slate-100'> - {date}</span>}
        </div>
        <div 
        className='icon'
        onClick={() => deleteTask(id)}>
        <AiOutlineCloseCircle className='icon'/>
            
        </div>
      

    </div>
)
}
export default UserTask1;