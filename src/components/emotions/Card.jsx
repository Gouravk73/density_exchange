import React from 'react'

const Card = ({card}) => {
  return (
    <div key={card.id} className= {`p-8 h-[300px] w-[300px] rounded-xl ${card.color} text-white ${card.tilt?'-rotate-6':''}`}   >
        <p>{card.emoji}</p>
         <h1 className={`text-xl font-medium ${card.tilt ? 'text-purple-300' : 'text-white-600'}`}>{card.heading}</h1>
        <p className={` ${card.tilt ? 'text-purple-300' : 'text-white-600'}`}>{card.title}</p>
    </div>
  )
}

export default Card