import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import SearchFormContext from '../../contexts/search-form-context';

import CardTag from './card-tag';

const CardLink = ({ imgUrl, imgTitle, tagData }) => {
    /** CONTEXTS */
    const { submitSearchForm } = useContext(SearchFormContext);
    
    /** HOOKS */
    const redirectTo = useNavigate();

    /** FUNCTIONS */

    /**
     * This function handles click event on the card and 
     * redirects the user to the trips page based on the card title
     */
    const handleRedirect = () => {
        // Pass card title to search form
        submitSearchForm({
            sport: imgTitle
        });
        
        // Navigate to the trips page to show results
        redirectTo('/trips');
    }

    return (
        <div className='container w-full h-full flex flex-col items-center 
        shadow-lg rounded-lg overflow-clip cursor-pointer transition-transform
        active:brightness-90 active:scale-95'
            onClick={handleRedirect}
            title={`Search for ${imgTitle} trips`}
        >
            <div className="container flex justify-center 
             m-0.5 mb-0 overflow-hidden relative">
                <img
                    loading='lazy'   
                    src={imgUrl}
                    alt={'sports activity'}
                    className='w-full h-56 lg:h-72 object-cover'
                />
            </div>
            <div className='flex flex-col w-full bg-main px-4 py-2'>
                <h4 className={`container mb-1 uppercase text-lg font-semibold text-white drop-shadow-xl 
                md:text-xl lg:text-3xl`}>
                    {imgTitle}
                </h4>
                <div className='flex flex-col flex-wrap space-y-2
                lg:flex-row lg:space-x-1 lg:space-y-0'>
                    <CardTag category={tagData[0]} label={tagData[1]} />
                </div>
                <p className='text-left py-4 text-slate-100 text-sm 
                lg:text-base'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum voluptas, ipsam rem et explicabo nemo unde doloremque ducimus quasi assumenda labore molestiae error repellat omnis veritatis? Ipsa eius recusandae rerum!
                </p>
            </div>
        </div>
        )
}

export default CardLink;