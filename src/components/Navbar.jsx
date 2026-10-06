import React from 'react'
import {Search,Bell,UserRound} from 'lucide-react'
const Navbar = () => {
  return (
    <div className='flex justify-between bg-white'>
      <h1>logo</h1>
      <div className="flex justify-evenly w-1/2">
        <p>Home</p>
        <p>Events</p>
        <p>Communites</p>
        <p>About</p>
      </div>
      <div className="flex justify-between w-20">
        <p><Search /></p>
        <p><Bell /></p>
        <p><UserRound /></p>
      </div>
    </div>
  )
}

export default Navbar
