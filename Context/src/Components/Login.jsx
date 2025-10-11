import React from 'react'
import { useContext,useState } from 'react'
import {userContext} from '../Context/Context.jsx'

function Login() {
  const [Name, setName] = useState('')
  const [Email, setEmail] = useState('')
  const [name,setname,email,setemail] = useContext(userContext)
    const HandleSubmit = (e) => {
     e.Defaultprevented
     setemail(Email)
     setname(Name)
     setEmail("")
     setName("")
     
  }


  return (
     <div className='p-7 bg-sky-300  rounded-2xl flex flex-col gap-7 items-center'>

    <input 
    className='text-black p-3 rounded-2xl border-2 border-black outline-none'
    type="text"
    placeholder='user name'
     value={Name}
    onChange={(e) => setName(e.target.value)}
    required
    />

    <input 
    className='text-black p-3 rounded-2xl border-2 border-black outline-none'
    type="text"
    placeholder='Email'
     value={Email}
    onChange={(e) => setEmail(e.target.value)}
    required
    />
    <button 
    onClick={HandleSubmit}
    >Login</button>

  </div>
  )
}

export default Login
