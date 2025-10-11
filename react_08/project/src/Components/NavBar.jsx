import React from 'react'
import {Link ,NavLink} from 'react-router-dom'



function NavBar() {
  return (
    <div>
      <header>
        <nav>
            <Link to='/Home' className="text-2xl text-amber-500">home</Link>
            <Link to='/About' className="text-2xl text-amber-500">About</Link>
        </nav>
      </header>
    </div>
  )
}

export default NavBar
