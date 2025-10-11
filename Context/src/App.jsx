import { useContext, useState } from 'react'
import './App.css'
import Login from './Components/Login'
import { userContext } from './Context/Context'
import Profile from './Components/Profile'


function App() {
 
  const [value,email] = useContext(userContext)
  console.log(value,email);
  
   
  return (
  <>
  <Login/>
  {
       value ? <Profile /> : <h1>please login</h1>
  }

  </>
  )
}

export default App
