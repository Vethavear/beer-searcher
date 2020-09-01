import React from 'react'
import './authWrapper.scss'

const AuthWrapper = ({ children }) => {


    return (
        <div className="authWrapper">
            {children}

        </div>
    )
}

export default AuthWrapper;