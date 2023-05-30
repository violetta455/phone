import React, { useState } from 'react'
import './AddName.css'

const AddName = (props) => {
    const [task, setTask] = useState("")

    function handleInput(e) {
        setTask(e.target.value)
    }

    function handleAdd() {
        if(!task){
            alert ("input is empty")
            return
        }
    
        const newTask = {
            task: task,
            status: false,
            id: Date.now()
        }
        props.handleTask(newTask);
        setTask('');
    }
  return (
    <div>
        <h2 className='mail'>ADD NAME</h2>
        <input className='name_1' placeholder='your name' type="text" value={task} onChange={handleInput} />
        <button className='btn_1' onClick={handleAdd}>Add name</button>
    </div>
  )
}

export default AddName