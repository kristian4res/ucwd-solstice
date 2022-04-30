import React from 'react';

import imgSurfing1 from '../../assets/surfing-img-1.jpg';

const PageArticle = ({ articleTitle, articleText, imgUrl }) => {
  return (
    <section id="article-section" className='mt-2 w-full h-full shadow-lg 
      md:mt-4' 
    style={{
      backgroundImage: `linear-gradient(105deg, rgba(44, 44, 44, 0.9) 0%, rgba(44, 44, 44, 0.5) 
                    100%), 
                    url(${imgUrl ? imgUrl : imgSurfing1})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }}>
      <article className='container flex flex-col items-start p-10 mb-8 text-white w-full min-h-60
        md:w-3/4 md:h-96 md:mb-4'
      >
        <h2 className="text-2xl font-bold">
          {
            articleTitle ? articleTitle 
            :
            'Make the most out of your trip'
          }
        </h2>
        <p className='text-left mt-6 pb-4 text-sm w-full
          md:w-[80%] lg:text-base'>
          {
            articleText ? articleText 
            :
            `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas debitis recusandae explicabo, obcaecati minus quia quae sapiente quibusdam impedit quisquam! 
            Ea explicabo, molestias vitae eaque fugiat quam iusto quos voluptatibus?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas debitis recusandae explicabo, obcaecati minus quia quae sapiente quibusdam impedit quisquam! 
            Ea explicabo, molestias vitae eaque fugiat quam iusto quos voluptatibus?
            `
          }
        </p>
        <small className='mt-4'>By John Doe</small>
      </article>
    </section>
  )
}

export default PageArticle