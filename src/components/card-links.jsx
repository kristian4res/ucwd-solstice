import React from 'react'

const CardLink = ({ imgUrl, imgTitle }) => {
    const sportTypeColor = {
        "summer": 'bg-primary opacity-90',
        "winter": 'bg-blue-500 opacity-90' 
    }

    return (
        <div className='container w-full h-full flex flex-col items-center shadow-lg rounded-lg overflow-clip'>
            <div className="container flex justify-center 
             m-0.5 mb-0 overflow-hidden relative">
                <img id="image" 
                    src={imgUrl}
                    alt={'Winter sports'}
                    className='w-full h-56 lg:h-72 object-cover'
                />
            </div>
            <div className='w-full bg-secondary px-4 py-2'>
                <h4 className={`container my-0  uppercase text-lg font-semibold text-white drop-shadow-xl 
                md:text-xl lg:text-3xl`}>
                    {imgTitle}
                </h4>
                <p className='text-left py-2 text-slate-100 text-sm 
                lg:text-md'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum voluptas, ipsam rem et explicabo nemo unde doloremque ducimus quasi assumenda labore molestiae error repellat omnis veritatis? Ipsa eius recusandae rerum!
                </p>
            </div>
        </div>
        )
}

export default CardLink;