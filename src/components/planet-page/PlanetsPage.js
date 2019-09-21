import React, {Component} from 'react';
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import SwapiService from "../../services/swapi-service";
import '../item-list/item-list.css';

export default class PlanetsPage extends Component {
    swapiService = new SwapiService();

    state = {
        selectedPlanet: null
    }

    onPlanetSelected = (id) => {
        this.setState({
            selectedPlanet: id
        })
    }

    render(){

        const {getAllPlanets, getPlanet, getPlanetImage} = this.swapiService;

        return(
            <div className="planetsPage block-items">
                <ItemList onItemSelected={this.onPlanetSelected} getData={getAllPlanets}>
                    {
                        (i)=>`${i.name}`
                    }
                </ItemList>
                <ItemDetails itemId={this.state.selectedPlanet} getData={getPlanet} getImageUrl={getPlanetImage}/>
            </div>
        );
    };
}
