import React from 'react'

const ImageCard = ({ imgUrl }) => {
  return (
        <div className="container rounded md:rounded-md m-0.5 max-w-md overflow-hidden">
            <img id="image" 
                src={imgUrl}
                alt={'Winter sports'}
                className='w-full h-56 lg:h-72 object-cover'
            />
        </div>
    )
}

export default ImageCard;