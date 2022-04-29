import React, { useState, useContext } from 'react';
import validator from 'validator';

import AppContext from '../../contexts/app-context';

import ButtonSolid from '../buttons/button-solid';
import GeneralFormInput from '../forms/general-form-input';
import WithSpinner from '../with-spinner';
import StatusMessage from '../status-message';

import { MdEmail } from 'react-icons/md';
import { BiMailSend } from 'react-icons/bi';
import GeneralFormTextarea from './general-form-textarea';


const ContactForm = () => {
    const StatusMessageWithSpinner = WithSpinner(StatusMessage);
    /** CONTEXTS */
    const { showModal, toggleModal } = useContext(AppContext);


    /** STATES */
    const [processSend, setProcessSend] = useState(false);
    const [name, setName] = useState({
        value: '',
        isInvalid: false
    });
    const [email, setEmail] = useState({
        value: '',
        isInvalid: false
    });
    const [message, setMessage] = useState({
        value: '',
        isInvalid: false
    });


    /** FUNCTIONS */
    /**
     * This function takes all the input state values and uses the validator package to validate the user input
     * @returns - true if all inputs pass all validators, otherwise false
     */
    const validateInputs = () => {
        let allInputsValid = true;

        if (!validator.isAlpha(name.value)) {
            setName(prevState => {
                return {
                    ...prevState,
                    isInvalid: true
                }
            });

            allInputsValid = false;
        }

        if (!validator.isEmail(email.value)) {
            setEmail(prevState => {
                return {
                    ...prevState,
                    isInvalid: true
                }
            });

            allInputsValid = false;
        }

        if (!validator.isAlphanumeric(message.value)) {
            setMessage(prevState => {
                return {
                    ...prevState,
                    isInvalid: true
                }
            });

            allInputsValid = false;
        }

        return allInputsValid;
    };

    /**
     * This function essentially simulates the validation and sending of data to the backend
     * @param {event} e - captured event, i.e. form submit 
     * @returns - true if all inputs are valid and acceptable, otherwise false
     */
    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Check input values
        if (!name.value || !email.value || !message.value) {
            if (!name.value) {
                setName(prevState => {
                    return {
                        ...prevState,
                        isInvalid: true
                    }
                });
            }

            if (!email.value) {
                setEmail(prevState => {
                    return {
                        ...prevState,
                        isInvalid: true
                    }
                });
            }

            if (!message.value) {
                setMessage(prevState => {
                    return {
                        ...prevState,
                        isInvalid: true
                    }
                });
            }

            return false;
        }
        else {
            const allInputsValid = validateInputs();

            if (!allInputsValid) {
                return false;
            }

            // Loading screen
            toggleModal(true);
            setProcessSend(true);

            // Clear input
            setName({
                value: '',
                isInvalid: false
            });
            setEmail({
                value: '',
                isInvalid: false
            });
            setMessage({
                value: '',
                isInvalid: false
            });

            // Disable loading screen
            setTimeout(() => {
                setProcessSend(false);
            }, 4000);

            return true;
        }   
    };

    return (
        <>
            <div className={`fixed top-1/2 left-1/2 -translate-x-[50%] 
                bg-white drop-shadow-xl rounded-lg z-10 max-h-[20rem] w-[24rem] p-8 pb-6
                justify-center items-center
                ${showModal ? 'flex' : 'hidden'}
            `}>
                <StatusMessageWithSpinner isLoading={processSend} status={true} toggleModal={toggleModal} />
            </div>
            <div className='flex flex-col justify-center w-[80%]
                items-center max-w-[1000px] rounded-md p-6 shadow-lg
                bg-main text-white
                md:p-8 md:w-[700px]
                '
            >   
                <form
                    id='contact-form'
                    className='flex flex-col p-1 gap-1 w-full
                        md:p-4
                    '
                    onSubmit={handleFormSubmit}
                >   
                    <div className="flex flex-row items-center form-group mb-4 border-b-2 border-primary">
                        <h1 className='text-2xl font-semibold'>Contact Us</h1>
                        <MdEmail className='hidden ml-6 md:block md:h-6 md:w-6' aria-hidden={true} />
                    </div>
                    <div className="form-group">
                        <GeneralFormInput 
                            type='text' 
                            label={'Name'} 
                            name={'contact-name'} 
                            state={[name, setName]}
                            errMessage={'Please enter a valid name using only letters, e.g. John.'}
                        />
                    </div>
                    <div className="form-group">
                        <GeneralFormInput 
                            type='email' 
                            label={'Email address'} 
                            name={'contact-email'} 
                            state={[email, setEmail]}
                            errMessage={'Please enter a valid email, e.g. name@provider.com'}
                        />
                    </div>
                    <div className="form-group">
                        <GeneralFormTextarea 
                            formId={'contact-form'}
                            label={'Message'}
                            name={'conctact-message'}
                            size={[20, 22]}
                            state={[message, setMessage]}
                            errMessage={'Please fill out the text box with your message.'}
                        />
                    </div>
                    <div className='flex justify-center text-white px-2 py-2 h-full w-full col-span-full
                    md:items-center md:justify-center xl:col-span-1'>
                        <ButtonSolid
                            type="submit"
                            btnStyles={'flex justify-center items-center gap-x-4 bg-success'}
                            btnTitle='Send mail'
                            icon={
                                <BiMailSend className='h-6 w-6 lg:h-8 lg:w-8' />
                            }
                        />
                    </div>
                </form>
            </div>
        </>
    )
}

export default ContactForm;