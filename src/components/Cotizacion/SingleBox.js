import React from 'react'
import './SingleBox.css'

const SingleBox = ({text, info}) => {
    return (
        <div className='box__container'>
            <p>{text}<br/><span>{info}</span></p>
        </div>
    )
}

export default SingleBox
