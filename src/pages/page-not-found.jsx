import React from 'react';
import { useParams } from 'react-router-dom';

import PageContainer from '../components/general/page-container';
import ButtonSolid from '../components/buttons/button-solid';

import { ReactComponent as PageNotFoundSVG} from '../assets/page-not-found.svg';

const PageNotFound = () => {
    const urlParams = useParams();

    return (
        <PageContainer>
            <section className='min-h-screen flex flex-col justify-center items-center w-full'>
                <article className="flex flex-col justify-center items-center w-2/3 my-4">
                    <PageNotFoundSVG title='HTTP 404 Error' className='h-[18rem] w-[20rem]
                        sm:h-[20rem] sm:w-[22rem]
                        md:h-[28rem] md:w-[30rem]
                        lg:h-[36rem] lg:w-[38rem]
                        ' 
                    />
                    <h1 className='text-xl font-semibold text-main -mt-6 my-4
                        md:text-2xl
                        lg:text-3xl
                    '>
                        Oops!
                    </h1>
                    <p className='max-w-[800px] text-base text-center whitespace-pre-wrap
                        md:text-xl
                    '>
                        Unfortunately, the page you were looking for is not available, please go back.
                    </p>
                </article>
                <div className='w-fit my-6'>
                    {/* If in the trips page, go back to /trips */}
                    {
                        urlParams.tripId 
                        ?
                            <ButtonSolid 
                                btnStyles={'bg-primary text-white'}
                                btnTitle={'Go back to trips'}
                                route={'/trips'}
                            />
                        :
                            <ButtonSolid 
                                btnStyles={'bg-primary text-white'}
                                btnTitle={'Go back'}
                                route={-1}
                            />
                    }
                </div>
            </section>
        </PageContainer>
    )
}

export default PageNotFound; 