import React, {Component} from 'react';
import './random-planet.css';

import SwapiService from '../../services/swapi-service';
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

export default class RandomPlanet extends Component {

    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true
    }

    componentDidMount() {
        this.updatePlanet();
        this.intervalId = setInterval(this.updatePlanet, 3500);

    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false,
            error: false
        });
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    onError = (error) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updatePlanet = () => {

        const id = Math.floor(Math.random()*25) + 2;
        // const id =124890;
        this.swapiService.getPlanet(id)
           .then(this.onPlanetLoaded)
            .catch(this.onError);

    }

    render(){

        const {planet, loading, error} = this.state;

        const hasData = !(loading || error);
        const errorMessage = error ? <ErrorIndicator/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = hasData ? <PlanetView planet={planet}/> : null;

        return(
            <div className="card card-block random-planet">
                {errorMessage}
                {spinner}
                {content}
            </div>
        )
    }

}

const PlanetView = ({planet}) => {
    const {id, name, population, rotationPeriod, diameter} = planet;

    return(
        <React.Fragment>
            <div className="card__left">
                <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
            </div>

            <div className="card__right">
                <div className="card-title card-title-block">{name}</div>

                <ul className="list-group list-group-flush list-group-block">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}

