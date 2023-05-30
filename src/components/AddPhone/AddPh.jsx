import React, { useState } from 'react'
import './AddPh.css'

const AddPh = (props) => {
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
        <h2 className='phon'>ADD PHONE</h2>
        <input className='name_1' placeholder='your phone' type="number" value={task} onChange={handleInput} />
        <button className='btn_1' onClick={handleAdd}>Add phone</button>
    </div>
  )
}

export default AddPh