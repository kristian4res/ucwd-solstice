import React from 'react'

const PageContainer = ({ extraStyles, bgColor, children }) => {
  return (
    <div className={`${bgColor ? bgColor : 'bg-white'} pb-10 h-full w-full min-w-screen ${extraStyles ? extraStyles : ''}`}>
        {children}
    </div>
  )
}

export default PageContainer;