import React from 'react'
import Navbar from './Navbar'
import Hero from '../sections/Hero'
import Bottom from '../sections/Bottom'

const Page = () => {
  return (
    <div className='bg-gray-200'>
      <Navbar/>
      <Hero/>
      <Bottom/>
    </div>
  )
}

export default Page
