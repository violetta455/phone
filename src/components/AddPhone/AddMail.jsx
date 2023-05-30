import React, { useState } from 'react'
import './AddMail.css'

const AddMail = (props) => {
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
    <div className='mail_1'>
        <h2 className='name'>ADD NAME</h2>
        <input className='name_1' placeholder='your mail' type="text" value={task} onChange={handleInput} />
        <button className='btn_1' onClick={handleAdd}>Add mail</button>
    </div>
  )
}

export default AddMail