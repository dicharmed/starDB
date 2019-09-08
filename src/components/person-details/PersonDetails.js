import React from 'react';
import './person-details.css';

const PersonDetails = () => {
    return(
        <div className="card card-block personDetails">
            <div className="card__left">
                <img src="https://images.vexels.com/media/users/3/152680/isolated/preview/22e162e0d0066ad0881e1ee797574680-uranus-planet-icon-by-vexels.png" alt=""/>
            </div>

            <div className="card__right card-person">
                <div className="card-title card-title-block-person">Luke Skywalker</div>

                <ul className="list-group list-group-flush list-group-block">
                    <li className="list-group-item">Gender male</li>
                    <li className="list-group-item">Birth Year 43</li>
                    <li className="list-group-item">Eye Color red</li>
                </ul>
            </div>
        </div>
    )
}

export default PersonDetails;