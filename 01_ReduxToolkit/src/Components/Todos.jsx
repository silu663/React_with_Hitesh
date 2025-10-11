import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import {removeTodo,updateTodo} from '../Feactures/Todo/todoSlice'

function Todos() {
 const todos =  useSelector(state => state.todos)
 const dispach = useDispatch()
  return (
  <>
  <div>Todos</div>
  {todos.map((todo) => (
    <li key={todo.id}><input
     type="text" 
     value={todo.text}
     onChange={(e) => {
      dispach(updateTodo({id:todo.id , value : e.target.value}))
      }
    
     }/>
    <button
    onClick={(e) => {
      dispach(removeTodo(todo.id))
    }}
    >x</button>
    <button
    onClick={(e) => {
    
        todo = {...todo,isEditable : true}
        
      
    }}>edit</button>
    </li>
  ))}
  </>
  )
}

export default Todos
