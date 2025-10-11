import React,{useState,useContext} from 'react'
import UserContext from '../Context/UserContext'



function Profile() { 
    const {user} = useContext(UserContext)


    if(!user) return <div>please login</div>
    return <div>welcome : {user.username}
              <h1> password : {user.password}</h1>
              <h1> age:{user.age}</h1>
    </div>
 
}

export default Profile
