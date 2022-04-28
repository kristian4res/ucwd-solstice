import React, { useState } from 'react';
import faqData from '../../dev-data/faq.json';

import FAQQuestion from './faq-question';

import { MdQuestionAnswer } from 'react-icons/md';
import { HiSearch } from 'react-icons/hi';


const FAQ = () => {
    /** STATES */
    const [questionSearch, setQuestionSearch] = useState('');

    return (
        <div className='flex flex-col shadow-xl rounded-lg p-6
        min-w-lg bg-main text-white
        md:p-8'
        >
            <div className="flex justify-center items-center gap-4 m-1 mb-4">
                <h1 className='text-2xl font-semibold'>
                    Frequently Asked Questions
                </h1>
                <MdQuestionAnswer className='hidden md:block md:h-6 md:w-6' aria-hidden={true} />
            </div>
            <div className="flex w-full shrink justify-center items-center 
            bg-white text-custom-dark rounded-md"
            >
                <HiSearch className='m-1 ml-2 h-6 w-6' aria-hidden={true} />
                <input className="flex ml-2 p-2 w-full text-sm rounded-md
                    md:text-base lg:text-lg'" 
                    type="text" 
                    placeholder='Search a question' 
                    onChange={(e) => setQuestionSearch(e.target.value)}
                    value={questionSearch}
                />
            </div>
            <ul className="flex flex-col mt-10 p-4 gap-2 
                max-w-xl max-h-[400px] overflow-auto"
            >
                {
                    // Dynamically render FAQ components depending on the search query
                    faqData.filter((val) => {
                        if (val.question.toLowerCase().includes(questionSearch.toLowerCase())) {
                            return val;
                        }
                        return null;
                    }).map((val, key) => {
                        return (
                            <FAQQuestion 
                                key={key}
                                question={val.question}
                                answer={val.answer} 
                            />
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default FAQ