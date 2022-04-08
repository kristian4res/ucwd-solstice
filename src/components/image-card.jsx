import React from 'react'

const ImageCard = ({ imgUrl, imgTitle, sportType }) => {
    const sportTypeColor = {
        "summer": '',
        "winter": ''
    }

    return (
            <div className="container shadow-md flex justify-center rounded md:rounded-md m-0.5 overflow-hidden relative">
                <h4 className={`container absolute my-0 px-2 py-2 top-0 left-0 ${sportTypeColor[sportType]}`}>
                    <span className='uppercase text-lg text-white drop-shadow-xl md:text-3xl'>{imgTitle}</span>
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