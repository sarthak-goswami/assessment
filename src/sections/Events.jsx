import React from 'react'
import events from '../events'
import EventCards from './EventCards'
const Events = () => {
  
  return (
    <div className='flex'>
      {events.map((event)=><EventCards key={event.id} event={event}/>)}
    </div>
  

)
}

export default Events
