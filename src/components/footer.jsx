import React from 'react'

const Footer = () => {
  return (
    <footer className='flex flex-col items-center mt-4 w-full bg-dark text-white'>
      <div className='flex space-x-8'>
        <section className='flex flex-col'>
          <h3>Section</h3>
        </section>
        <section className='flex flex-col'>
          <h3>Section</h3>
        </section>
        <section className='flex flex-col'>
          <h3>Section</h3>
        </section>
        <section className='flex flex-col'>
          <h3>Section</h3>
        </section>
      </div>
      <div className="flex border-t-rose-800">
        BOTTOM
      </div>
    </footer>
  )
}

export default Footer;