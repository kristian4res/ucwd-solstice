import React from 'react'

const PageContainer = ({ bgColor, children }) => {
  return (
    <div className={`${bgColor ? bgColor : 'bg-white'} pb-10 h-full w-full`}>
        {children}
    </div>
  )
}

export default PageContainer;