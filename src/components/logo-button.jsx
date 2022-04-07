import React from 'react'

import { ReactComponent as SolsticeLogoLight } from '../assets/solstice-logo-light.svg';
import { ReactComponent as SolsticeLogoColoured } from '../assets/solstice-logo-coloured.svg';

const LogoButton = ({ navStatus }) => {
  return (
    <div className="flex justify-center text-xl font-bold mr-auto cursor-default md:text-3xl">
      {
        navStatus.length > 0 ?
        <SolsticeLogoColoured />
        : <SolsticeLogoLight />
      }
      <div className='flex flex-col items-center justify-center ml-1 h-full text-center'>
        solstice
      </div>
    </div>
  )
}

export default LogoButton