import React from 'react'
import {MapPin,MoveRight, Search} from 'lucide-react'
const SearchSection = () => {
  return (
    <div className='flex bg-white justify-evenly rounded-2xl'>
      <p><Search/></p>
      <input placeholder='Search events...'/>
      <p><MapPin /></p>
      <button className='bg-purple-600 rounded-4xl text-white'><MoveRight /></button>
    </div>
  )
}

export default SearchSection
