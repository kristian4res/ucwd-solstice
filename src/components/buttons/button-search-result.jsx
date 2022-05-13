import React from 'react';

const ButtonSearchResult = ({ val: { title, subtitle }, handleClick, icon }) => {

    return (
        <li className='text-custom-dark hover:bg-slate-200 cursor-pointer'
            title={`Search for ` + title}
        >
            <button className='btn-solid items-center px-2'
                onClick={() => handleClick()}
            >
                <span aria-hidden={true}>
                    {icon ? icon : 'Icon'}
                </span>
                <div className='flex flex-col items-start justify-start w-full'>
                    <span className='ml-2 text-sm text-left'>
                        {title ? title : 'Title'}
                    </span>
                    <span className='bg-red ml-2 text-sm font-thin text-left'>
                        {subtitle ? subtitle : 'Subtitle'}
                    </span>
                </div>
            </button>
        </li>
    )
}

export default ButtonSearchResult