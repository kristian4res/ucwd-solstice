import React, { useContext } from 'react';
import AppContext from '../contexts/app-context';

const Modal = () => {
    const { showModal, toggleModal } = useContext(AppContext);

    return (
        <div className={`${!showModal ? 'hidden' : 'block'} 
                absolute z-[5] top-0 left-0 h-full w-full bg-black opacity-75
            `}
            onClick={() => {
                toggleModal(false);
            }}
        />
  )
}

export default Modal