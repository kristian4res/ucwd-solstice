import React from 'react';

const ButtonSearchResult = ({ val, handleClick, icon }) => {

    return (
        <li className='text-dark hover:bg-slate-200 cursor-pointer'>
            <button className='btn-solid items-center px-2'
                onClick={() => handleClick()}
            >
                {icon ? icon : '🥞'}
                <div className='flex flex-col items-start justify-start w-full'>
                    <span className='ml-2 text-sm text-left'>
                        {val.name ? val.name : 'NAME'}
                    </span>
                    <span className=' bg-red ml-2 text-sm font-thin text-left'>
                        {val.country ? val.country : 'COUNTRY'}
                    </span>
                </div>
            </button>
        </li>
    )
}

export default ButtonSearchResult