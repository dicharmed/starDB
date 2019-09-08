import React from 'react';
import s from './app.module.css';


import Header from '../header';
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import PlanetDetails from "../planet-details";
import RandomPlanet from "../random-planet";
import StarshipDetails from "../starship-details";


const App = () => {
    return(
        <div className={s.appWrapper}>
            <Header/>
            <RandomPlanet/>
            <ItemList/>
            <PersonDetails/>
            {/*<PlanetDetails/>*/}
            {/*<StarshipDetails/>*/}
        </div>
    )
}

export default App;