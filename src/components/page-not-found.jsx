import React from 'react'
import PageContainer from './page-container';

import { ReactComponent as PageNotFoundSVG} from '../assets/page-not-found.svg';

const PageNotFound = () => {
  return (
    <PageContainer>
        <section className='min-h-screen flex flex-col justify-center items-center w-full'>
            <div className="flex flex-col justify-center items-center w-2/3">
                <PageNotFoundSVG title='HTTP 404 Error' className='h-[18rem] w-[20rem]
                    sm:h-[20rem] sm:w-[22rem]
                    md:h-[28rem] md:w-[30rem]
                    lg:h-[36rem] lg:w-[38rem]
                    ' 
                />
                <h1 className='text-xl font-semibold text-main -mt-6
                    md:text-2xl
                    lg:text-3xl
                '>
                    Oops!
                </h1>
                <p className='text-base text-center  whitespace-pre-wrap
                    md:text-xl
                '>
                    Unfortunately, the page you were looking for doesn't exists, please go back.
                </p>
            </div>
        </section>
    </PageContainer>
  )
}

export default PageNotFound; 