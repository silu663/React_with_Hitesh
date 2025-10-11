import React ,{useState,useContext} from 'react'
import UserContext from "../Context/UserContext"

function Login() {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const [age, setage] = useState('')

    const {setuser} = useContext(UserContext)

const handleSubmit = (e) => { 
  e.preventDefault()
   setuser({username,password,age})
}

  return (
    <div>
      <h2>login</h2>
      <input
      value={username}
       type="text"
       onChange={(e) => setusername(e.target.value)}
       placeholder="username" />

       {" "}

      <input
       type="text"
       value={password}
       onChange={(e) => setpassword(e.target.value)}
        placeholder="password" />

      <input
       type="text"
       value={age}
       onChange={(e) => setage(e.target.value)}
        placeholder="age" />


      <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default Login
