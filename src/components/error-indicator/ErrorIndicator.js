import React from 'react';
import './error-indicator.css';
import icon from './death-star.png'

const ErrorIndicator = () => {
    return(
        <div className='error-block'>
            <img src={icon} alt="error icon"/>
            <div className="error-title">BOOM!</div>
            <div className="error-content">
                something has terribly gone wrong <br/>
                (but we already sent droids to fix it)
            </div>
        </div>
    )
}

export default ErrorIndicator;