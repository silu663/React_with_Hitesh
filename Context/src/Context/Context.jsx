import React, { useState } from 'react'
import { createContext } from 'react'
const userContext = createContext()

function Context({children}) {


const [name, setname] = useState("")
const [email, setemail] = useState("")

  return (
    <userContext.Provider value={[name,setname,email,setemail]}>
      {children}
    </userContext.Provider>
  )
}

export { Context ,userContext}

