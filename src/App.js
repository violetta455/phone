import React, { useState } from 'react'
import AddMail from './components/AddPhone/AddMail'
import AddName from './components/AddPhone/AddName'
import AddPh from './components/AddPhone/AddPh'
import EditPh from './components/CreatePhone/EditPh'
import Phone from './components/phone/Phone'

const App = () => {
   const [modal, setModal] = useState(false);
   const [editTodo, setEditTodo] = useState({})
 
   const [todos, setTodos] = useState([]);
 
   const handleTask = (newObj) => {
     let newTodos = [...todos];
     newTodos.push(newObj);
     setTodos(newTodos);
   };
 
   function changeStatus(id) {
     const newTodos = todos.map((item) => {
       if(item.id == id){
         item.status = !item.status
       }
       return item
     });
     setTodos(newTodos);
   }
 
   const handlEdit = (taskToEdit)=> {
     setModal(true)
     setEditTodo(taskToEdit)
   }
 
   const handleCloseModal = ()=> {
     setModal(false)
   }
 
   const handleSaveTask = (updateTask) => {
     const newTodos = todos.map((item)=> {
       if (item.id == updateTask.id){
         return updateTask
       }
       return item
     })
     setTodos(newTodos)
     handleCloseModal()
   }
 
   const handleDelete = (id)=>{
     let newTodos = todos.filter((item) => item.id !== id)
     setTodos(newTodos)
   }



  //  ! NAMES

   const [modal1, setModal1] = useState(false);
   const [editTodo1, setEditTodos1] = useState({})
 
   const [todos1, setTodos1] = useState([]);
 
  //  const handleTask1 = (newObj) => {
  //    let newTodos = [...todos1];
  //    newTodos.push(newObj);
  //    setTodos1(newTodos);
  //  };
 
   function changeStatus1(id) {
     const newTodos = todos1.map((item) => {
       if(item.id == id){
         item.status = !item.status
       }
       return item
     });
     setTodos1(newTodos);
   }
 
   const handlEdit1 = (taskToEdit)=> {
     setModal1(true)
     setEditTodos1(taskToEdit)
   }
 
   const handleCloseModal1 = ()=> {
     setModal1(false)
   }
 
   const handleSaveTask1 = (updateTask) => {
     const newTodos = todos1.map((item)=> {
       if (item.id == updateTask.id){
         return updateTask
       }
       return item
     })
     setTodos1(newTodos)
     handleCloseModal1()
   }
 
   const handleDelete1 = (id)=>{
     let newTodos = todos1.filter((item) => item.id !== id)
     setTodos1(newTodos)
   }

  //  ! NAMES


 
  return (
    <div>
      <AddPh handleTask={handleTask} />
      <AddName handleTask={handleTask} />
      <AddMail handleTask={handleTask} />
      {modal1 ? <EditPh  handleSaveTask={handleSaveTask1} editTodo={editTodo1} handleCloseModal={handleCloseModal}/> : null}
      {/* <MailPh handleDelete={handleDelete} handlEdit={handlEdit} todos={todos} changeStatus = {changeStatus} /> */}
      <Phone handleDelete={handleDelete} handlEdit={handlEdit} todos={todos} changeStatus = {changeStatus} />
      {modal ? <EditPh  handleSaveTask={handleSaveTask} editTodo={editTodo} handleCloseModal={handleCloseModal}/> : null}
    </div>
  )
}

export default App
