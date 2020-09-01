import React from 'react'
import './formInput.scss'
const FormInput = ({ handleChange, label, ...otherProps }) => {
    
    return (
        <label className="label">{label}
            <input className="input" onChange={handleChange} {...otherProps} />
        </label>
    )
}

export default FormInput
