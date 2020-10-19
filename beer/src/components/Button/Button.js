import React from 'react'
import './button.scss'
const Button = ({...otherProps}) => {
    return (
        <button className="button" {...otherProps}></button>
    )
}

export default Button

