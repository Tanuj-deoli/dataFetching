import React from 'react'
import { useState } from 'react';
import { Container, InputGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
const { v4: uuidv4 } = require('uuid');


function TodoList() {
    
    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState([])
    const [show,setShow]=useState(true)
  
    const handleAdd = () => {
      setTodos([...todos, { id: uuidv4(), todo, isComplete: false }])
      setTodo("")
      // console.log(todo, todos)
    }
    const handleChange = (e) => {
      setTodo(e.target.value)
    }
    const handelCheckbox = (e) => {
      let id = e.target.name
      // console.log(id)
      let index = todos.findIndex(item => {
        return item.id === id;
      })
      let newTodos = [...todos]
      newTodos[index].isComplete = !newTodos[index].isComplete
      setTodos(newTodos)
      // console.log(newTodos,"newTodos")
    }


    const handelDelete = (idToDelete) => {
      const updatedTodos = todos.filter(todo => todo.id !== idToDelete);
      // console.log(updatedTodos)
      setTodos(updatedTodos);
    }


    const handelEdit = (e,id)=>{
      let EditTodo = todos.filter(i=>i.id === e)
      setTodo(EditTodo[0].todo)
      // console.log(EditTodo[0].todo,'edit')
      const updatedTodos = todos.filter(todo => todo.id !== e);
      // console.log(updatedTodos)
      setTodos(updatedTodos);
    }

    const ToggleShow=()=>{
      setShow(!show)
    }
  return (
    <Container>
    <div className='TodoListSec'>
       <h2>Add TOdo</h2>
      <div>
        <input type="text" onChange={handleChange} value={todo} />
        <button onClick={handleAdd} disabled={todo.length<=3}> add todo</button>
      </div>
      <div>
        <h2>Your Todo</h2>
        <input onChange={ToggleShow} type="checkbox" checked={show} /> Show finished

        {todos.map((todo, index) => {
          return (show || !todo.isComplete) && <div className='TodoCard' key={todo.id}>
            <div className='TodoCardTast'>
              <input type="checkbox" onChange={handelCheckbox} name={todo.id} checked={todo?.isComplete}/>
              <p className={todo?.isComplete ? "lineThrough" : "b"}>{todo.todo}</p>
            </div>
            <div className='DeleteEditButton'>
              <button onClick={(e)=>{handelEdit(todo.id)}}>edit</button>
              <button onClick={()=>{handelDelete(todo.id)}}>Delete</button>
            </div>
          </div>
        })}

      </div>
    </div>
    </Container>
  )
}

export default TodoList
