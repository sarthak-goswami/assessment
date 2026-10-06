import React from 'react'
import SearchSection from '../sections/SearchSection'
import Floater from './Floater'

const Left = () => {
  return (
    <div className='flex-col m-30'>
      <h1 className='bg-purple-400 text-purple-950 px-2 rounded'>Explore  .  Learn  .  Connect</h1>
      <h1 className='text-3xl font-bold'>Discover Amazing <br />Events at <span className='text-purple-600'>Your Campus</span></h1>
      <p>Find and Join workshop, Hackathons, cultural events, etc...</p>
      <SearchSection/>
      <div className="flex justify-evenly mt-5">
        <Floater name={"All"}/>
        <Floater name={"Technical"}/>
        <Floater name={"Cultural"}/>
        <Floater name={"Workshop"}/>
      </div>
    </div>
  )
}

export default Left
