import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as SolsticeLogoLight } from '../../assets/solstice-logo-light.svg';
import { ReactComponent as SolsticeLogoColoured } from '../../assets/solstice-logo-coloured.svg';

const LogoAdaptive = ({ pageLocation, navStatus }) => {
  return (
    <Link className="flex justify-center items-center text-lg font-bold md:text-3xl" to='/'>
      {
        navStatus.length > 0 || pageLocation !== '/' ?
        <SolsticeLogoColoured />
        : <SolsticeLogoLight />
      }
      <div className={`flex flex-col items-center justify-center ml-1 h-full text-center`}>
        solstice
      </div>
    </Link>
  )
}

export default LogoAdaptive