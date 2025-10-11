import { useState } from 'react'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Components/Login.jsx'
import Profile from './Components/Profile.jsx'

function App() {

  return ( 
   <UserContextProvider> 
     <h1 className='text-5xl text-center'>React with context api</h1> 
     <Login/>
     <Profile/>
   </UserContextProvider>
  )
}

export default App
