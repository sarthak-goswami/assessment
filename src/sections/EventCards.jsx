import React from 'react'


const EventCards = ({event}) => {

  return (
    <div className="flex flex-col m-5 p-5 w-70 rounded-2xl border border-purple-800 bg-purple-100">

      <img width="220px" height="200px" src={event.image} alt={event.title} />

      <div className="">

        <div className="flex">
          <span>{event.category}</span>
          <span>{event.status}</span>
        </div>

        <h2>{event.title}</h2>

        <p>{event.description}</p>

        <div className="flex">
          <span> {event.date}</span>
          <span> {event.location}</span>
        </div>

        <div className="">
          <span>{event.attendees}</span>

          <button>
            View Details →
          </button>
        </div>

      </div>
    </div>
  )
}

export default EventCards
