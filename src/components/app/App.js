import React, {Component} from 'react';
import s from './app.module.css';


import Header from '../header';
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import PlanetDetails from "../planet-details";
import RandomPlanet from "../random-planet";
import StarshipDetails from "../starship-details";


export default class App extends Component{
    state = {
        showRandomPlanet: true,
        selectedPerson: null
    }

    toggleRandomPlanet = () => {
        this.setState({
            showRandomPlanet: !this.state.showRandomPlanet
        })
    }
    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }

    render(){
        const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;

        return(
            <div className={s.appWrapper}>
                <Header/>

                {planet}

                <button type="button" className="btn btn-warning btn-lg toggleBtn" onClick={this.toggleRandomPlanet}>Toggle Random Planet</button>

                <ItemList onItemSelected={this.onPersonSelected}/>
                <PersonDetails personId={this.state.selectedPerson}/>
                {/*<PlanetDetails/>*/}
                {/*<StarshipDetails/>*/}
            </div>
        )
    }

}

