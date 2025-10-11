import React from 'react'
import { useContext } from 'react'
import { userContext } from '../Context/Context'

function Profile() {
  const [name,setname,email,setemail] = useContext(userContext)
  if(!email || !name) {
    return (
      <>
       <div className='p-7  rounded-2xl flex flex-col gap-7 items-center'>
         < h1 className='text-white p-3 rounded-2xl outline-none'>please login</h1>
       </div>
      </>
    )
  }
  
  
  return (
    <>
    <div className='p-7   rounded-2xl flex flex-col gap-7 items-center'>
       <h1 className='text-white p-3 rounded-2xl outline-none'>Welcome  : {name}</h1>
    </div>
    </>
  )
}

export default Profile
