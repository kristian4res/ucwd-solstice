import React from 'react'

const ImageCard = ({ imgUrl, imgTitle, sportType }) => {
    const sportTypeColor = {
        "summer": 'bg-amber-500',
        "winter": 'bg-blue-500'
    }

    return (
            <div className="container shadow-md flex justify-center rounded md:rounded-md m-0.5 overflow-hidden relative">
                <h4 className={`container absolute my-0 px-2 py-2 top-0 left-0 ${sportTypeColor[sportType]}`}>
                    <span className='text-lg text-white md:text-xl'>{imgTitle}</span>
                </h4>
                <img id="image" 
                    src={imgUrl}
                    alt={'Winter sports'}
                    className='w-full h-56 lg:h-72 object-cover'
                />
            </div>
        )
}

export default ImageCard;