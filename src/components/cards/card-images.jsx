import React from 'react'

const CardImage = ({ imgUrl }) => {
  return (
    <div className="container shadow-md flex justify-center rounded 
    md:rounded-md m-0.5 overflow-hidden relative">
        <img id="image" 
            src={imgUrl}
            alt={'Winter sports'}
            className='w-full h-56 lg:h-72 object-cover'
        />
    </div>
  )
}

export default CardImage