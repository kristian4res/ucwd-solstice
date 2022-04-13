import React from 'react'

const SectionTitle = ({ title, textColor }) => {
  return (
    <h2 className={`${textColor} text-2xl font-bold mx-10 mt-12 mb-3 md:mt-6`}>
        {title}
    </h2>
  )
}

export default SectionTitle