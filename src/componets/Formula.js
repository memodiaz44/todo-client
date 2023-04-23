import React, { useState } from 'react';
import "../stylesheets/Formula.css"
import { v4 as uuidv4 } from 'uuid'



const Formula = (props) => {

    const [input,  setInput] = useState('');



const manageChange = e => {
    setInput(e.target.value);
    console.log(e.target.value)


}

const manageSent = e => {
    e.preventDefault();


    const newTask = {
        id: uuidv4(),
        text: input,
        completed: false
    }
props.onSubmit(newTask)
}

    return (
    
    <form className='task-form'
    onSubmit={manageSent}>
        <input
        className='task-input'
        type='text'
        placeholder='white a task'
        name='text'
        onChange={manageChange}
        />
        <button className='button'>Add text</button>




    </form>
    




    )



}
export default Formula
