import React from 'react';
import './spinner.css';


const Spinner = () => {
    return(
        <div className="lds-css ng-scope" style={{margin:'0 auto'}}>
            <div className="lds-spinner" >
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Spinner;



