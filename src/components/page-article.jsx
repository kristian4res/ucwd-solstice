import React from 'react';

import imgSurfing1 from '../assets/surfing-md-1.jpg';

const PageArticle = ({ articleTitle, articleText, imgUrl }) => {
  return (
    <section id="article-section" className='mt-2 w-full h-full shadow-lg md:mt-4' style={{
      backgroundImage: `linear-gradient(105deg, rgba(44, 44, 44, 0.9) 0%, rgba(44, 44, 44, 0.9) 48%, transparent 48%), 
      url(${imgUrl ? imgUrl : imgSurfing1})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }}>
      <article className='container flex flex-col mb-8 text-white w-2/4 min-h-60
      md:h-96 md:mb-4'>
        <h2 className="text-2xl font-bold mt-6 mx-10">
          {
            articleTitle ? articleTitle 
            :
            'Make the most out of your trip'
          }
        </h2>
        <p className='text-left mt-4 mx-10 w-3/4 text-sm 
          lg:text-base'>
          {
            articleText ? articleText 
            :
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas debitis recusandae explicabo, obcaecati minus quia quae sapiente quibusdam impedit quisquam! Ea explicabo, molestias vitae eaque fugiat quam iusto quos voluptatibus?'
          }
        </p>
      </article>
    </section>
  )
}

export default PageArticle