import React, { useState } from 'react'
import './Edit.css'

const EditPh = (props) => {
    const [item, setItem] = useState(props.editTodo)

    const handleEditInput = (e) => {
        let newObj = {...item }
        newObj.task = e.target.value
        setItem(newObj)
    }
  return (
    <div className='main-modal'>
        <div className="inner-modal">
            <div className="close">
                <button className='btn_1' onClick ={props.handleCloseModal}>X</button>
            </div>
            <input className='imp_1' onChange={handleEditInput} value={item.task} type="text" />
            <button className='btn_2' onClick={()=> props.handleSaveTask(item)}>Save changes</button>
        </div>
    </div>
  )
}


export default EditPh