import React from 'react'

const CardTag = ({ category, label }) => {
  const colors = {
    "summer": 'bg-primary',
    "winter": 'bg-secondary-pastel',
    "continent": 'bg-primary'
  }

  return (
    <div className={`container w-fit py-[0.2rem] px-[0.4rem] rounded-full shadow-md 
      ${colors[label] ? colors[label]: 'bg-secondary'}
    `}>
      <span className='capitalize text-white text-sm
      xl:text-base'>
        {label}
      </span>
    </div>
  )
}

export default CardTag