import React from 'react'
import './/Phone.css'

const Phone = (props) => {
  return (
    <div>
        <h2 className='phone_book'>PHONE BOOK</h2>
        <ul className='ul'>
            {props.todos.map((item)=> (
                <li key={item.id} className={item.status ? 'completed': '' }>
                    <input type="text" className='text_phone' onChange={()=> props.changeStatus(item.id)} />
                    {item.task}
                    <button className='btn' onClick={() => props.handlEdit(item)}> Edit </button>
                    <button className='btn' onClick={()=>props.handleDelete(item.id)}> Delete </button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Phone