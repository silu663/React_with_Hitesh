import { useState } from 'react'

import './App.css'
import AddTodo from './Components/AddTodo'
import Todos from './Components/Todos'

function App() {

  return (
  <>
   <h1 className='text-6xl bg-amber-600 font-[700]'>Redux tool kit</h1>
   <AddTodo />
   <Todos />
  </>
  
  )
}

export default App
