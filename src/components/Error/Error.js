import React from 'react'
import './Error.css'

const Error = ({mensaje}) => {
    return (
        <div className='error__msg'>
            {mensaje}
        </div>
    )
}

export default Error
