import React from 'react'
import { ReactComponent as SolsticeLogo } from '../assets/solstice-logo-light.svg';

const LogoButton = () => {
  return (
    <div className="flex justify-center text-xl md:text-3xl font-bold mr-auto cursor-default">
      <SolsticeLogo />
      <div className='flex flex-col items-center justify-center ml-1 h-full text-center'>
        Solstice
        {/* <div className='custom-bg-gradient w-full h-2 rounded-sm'></div> */}
      </div>
    </div>
  )
}

export default LogoButton