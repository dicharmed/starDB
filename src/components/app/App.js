import React, {Component} from 'react';
import './app.css';


import Header from '../header';
import RandomPlanet from "../random-planet";
import SwapiService from "../../services/swapi-service";
import ErrorButton from "../error-button/ErrorButton";
import ErrorBoundry from "../error-boundry/ErrorBoundry";

import PeoplePage from '../people-page'


export default class App extends Component{

    swapiService = new SwapiService();

    state = {
        showRandomPlanet: true,
        hasError: false
    }

    toggleRandomPlanet = () => {
        this.setState({
            showRandomPlanet: !this.state.showRandomPlanet
        })
    }

    componentDidCatch() {
        this.setState({hasError: true});
    }

    render(){
        const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;

        return(
            <ErrorBoundry>
                <div className="appWrapper">
                    <Header/>
                    {planet}
                    <button type="button" className="btn btn-warning btn-lg toggleBtn" onClick={this.toggleRandomPlanet}>Toggle Random Planet</button>

                    <ErrorButton/>


                    <PeoplePage/>
                    {/*<PlanetsPage/>*/}
                    {/*<StarshipsPage/>*/}
                </div>
            </ErrorBoundry>
        )
    }

}

