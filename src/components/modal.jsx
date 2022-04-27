import React, { useContext } from 'react';
import AppContext from '../contexts/app-context';

const Modal = () => {
    /** CONTEXTS */
    const { showModal, toggleModal } = useContext(AppContext);

    return (
        <div className={`${!showModal ? 'hidden' : 'block'} 
                absolute z-[5] top-0 left-0 h-full w-full bg-black opacity-75
            `}
            onClick={() => {
                toggleModal(false);
        }}>
            {/* <h1 className='fixed top-[50%] left-[50%] -translate-x-[100%] text-slate-500'>Click to remove</h1> */}
        </div>
  )
}

export default Modal