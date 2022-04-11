import React from 'react'

const CardLink = ({ imgUrl, imgTitle }) => {
    const sportTypeColor = {
        "summer": 'bg-primary opacity-90',
        "winter": 'bg-blue-500 opacity-90' 
    }

    return (
        <div className='container w-full h-full'>
            <div className="container shadow-md flex justify-center rounded 
            md:rounded-md m-0.5 overflow-hidden relative">
                <img id="image" 
                    src={imgUrl}
                    alt={'Winter sports'}
                    className='w-full h-56 lg:h-72 object-cover'
                />
            </div>
            <div>
                <h4 className={`container my-0 px-2 py-2 uppercase text-lg font-semibold text-dark drop-shadow-xl 
                md:text-3xl`}>
                    {imgTitle}
                </h4>
            </div>
        </div>
        )
}

export default CardLink;