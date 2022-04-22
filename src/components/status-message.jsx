import React from 'react'

const StatusMessage = ({ status }) => {
    return (
    <h3 className={`text-center text-bold text-base ${status ? 'text-success' : 'text-failure'}`}>
        {
        status
        ? 'Successfully signed up!'
        : 'Unexpected error encountered, please try again or contact support.'
        }
    </h3>
    )
}

export default StatusMessage