import React from 'react'

const TripTag = ({ category, label, color }) => {
  const colors = {
    "summer": 'bg-primary',
    "winter": 'bg-secondary'
  }

  return (
    <div className={`container w-fit py-[0.2rem] px-[0.4rem] rounded-full shadow-md 
      ${colors[color]}
    `}>
      <span className='capitalize text-white text-sm
      lg:text-base'>
        {category}: {label}
      </span>
    </div>
  )
}

export default TripTag