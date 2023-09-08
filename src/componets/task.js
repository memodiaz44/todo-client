/* eslint-disable */

import React from 'react';
import '../stylesheets/task.css'
import { AiOutlineCloseCircle } from "react-icons/ai";


const Task1 = ({id, text, completed, completedTask, deleteTask }) => {
return(
    <div className={completed ? 'task-conteiner complete' : 'task-conteiner'  }>
        <div className='task-text'
        onClick={() => completedTask(id)}>
            {text}
        </div>
        <div className='icon'
        onClick={() => deleteTask(id)}>
              <AiOutlineCloseCircle className='icon'/>
            
        </div>
      

    </div>
)
}
export default Task1;