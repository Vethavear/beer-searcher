import React from 'react'
import './button.scss'
const Button = ({...otherProps}, props) => {
    return (
        <button type="button" className="button" {...otherProps}></button>
    )
}

export default Button

