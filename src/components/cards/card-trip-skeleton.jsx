import React from 'react';


const CardTripSkeleton = () => {
    return (
        <div className='w-[1000px] h-72 drop-shadow-xl rounded-lg overflow-hidden
            flex flex-col 
            md:grid md:grid-cols-3 
        '>
            <div className={`container h-72
                bg-custom-gray-dark flex 
                justify-center 
                animate-pulse
                relative col-span-1`}
            >   
                <img
                    src={''}
                    alt={''}
                    className={`object-cover w-full
                        lg:h-80
                    `}
                />
            </div>
            <div className='container h-full w-full 
                bg-custom-gray col-span-2 
                flex flex-col justify-between
            '>
                <div className="w-full h-fit px-4 py-2 text-white">
                    <div className='container flex flex-col gap-2'>
                        <div className={`
                            text-current drop-shadow-xl 
                            h-10 w-[25%] bg-custom-gray-dark rounded-xl
                            animate-pulse`
                            }
                        />
                        <div className={`
                            text-current drop-shadow-lg 
                            h-8 w-[20%] bg-custom-gray-dark rounded-xl
                            animate-pulse`
                            }
                        />
                    </div>
                    <div className={`
                        mt-4 drop-shadow-lg 
                        h-24 w-full bg-custom-gray-dark rounded-xl
                        animate-pulse`
                        }
                    />
                </div>
                <div className='container h-16 w-full 
                    text-white flex justify-between items-center
                    bg-custom-gray-dark animate-pulse 
                    px-4 py-2
                    '
                />
            </div>
        </div>
        )
}

export default CardTripSkeleton;