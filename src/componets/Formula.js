/* eslint-disable */

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
    
    e.preventDefault()
    const newTask = {
      id: uuidv4(),
      text: input,
      completed: false
  }

  setInput('')
  props.onSubmit(newTask)
}

    return (
    
    <form className='task-form'
    onSubmit={manageSent}>
        <input
      className="appearance-none rounded-md border-none w-3/4 text-white-700 mr-3 py-1 px-2 leading-tight focus:outline-none bg-gray-500"
      type='text'
        placeholder='white a task'
        value={input}
        name='text'
        onChange={manageChange}
        />
        <button 
      className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
      >Add text</button>




    </form>
    




    )



}
export default Formula
