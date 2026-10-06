import React from 'react'

const SearchSection = () => {
  return (
    <div className='flex bg-white justify-evenly rounded-2xl'>
      <p>S</p>
      <input placeholder='Search events...'/>
      <p>location</p>
      <button className='bg-purple-600 rounded-4xl'>{`->`}</button>
    </div>
  )
}

export default SearchSection
