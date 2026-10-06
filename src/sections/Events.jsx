import React from 'react'
// import events from '../events'
import EventCards from './EventCards'
const Events = () => {
  const events = [
  {
    id: 1,
    title: "Tech Fest 2026",
    category: "Technical",
    status: "Open",
    description:
      "A two-day celebration of innovation, technology and creativity.",
    date: "12 Oct 2026",
    location: "Block 32 Auditorium",
    attendees: 120,
    image: "img1"
  },

  {
    id: 2,
    title: "AI & ML Workshop",
    category: "Workshop",
    status: "Limited",
    description:
      "Hands-on workshop on real-world applications of AI and Machine Learning.",
    date: "18 Oct 2026",
    location: "Computer Science Block",
    attendees: 80,
    image: "img2"
  },

  {
    id: 3,
    title: "Cultural Night",
    category: "Cultural",
    status: "Open",
    description:
      "Music, dance, drama and more. A night to celebrate our diverse talents.",
    date: "25 Oct 2026",
    location: "Main Ground",
    attendees: 200,
    image: "img3"
  },

  {
    id: 4,
    title: "Hackathon 3.0",
    category: "Hackathon",
    status: "Full",
    description:
      "Build innovative solutions to real-world problems. Prizes, mentorship and more!",
    date: "02 Nov 2026",
    location: "Innovation Center",
    attendees: 150,
    image: "img4"
  }
];
  return (
    <div className='flex'>
      {events.map((event)=><EventCards key={event.id} event={event}/>)}
    </div>
  

)
}

export default Events
