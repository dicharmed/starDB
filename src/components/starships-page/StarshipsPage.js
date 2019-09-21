import React, {Component} from 'react';
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import SwapiService from "../../services/swapi-service";
import '../item-list/item-list.css';
import {Record} from "../item-details/ItemDetails";

export default class StarshipsPage extends Component {
    swapiService = new SwapiService();

    state = {
        selectedStarship: null
    }

    onStarshipsSelected = (id) => {
        this.setState({
            selectedStarship: id
        })
    }

    render() {

        const {getAllStarships,getStarship, getStarshipImage} = this.swapiService;
        return(
            <div className="starshipsPage block-items">
                <ItemList onItemSelected={this.onStarshipsSelected} getData={getAllStarships}>
                    {
                        (i)=>`${i.name}`
                    }
                </ItemList>
                <ItemDetails itemId={this.state.selectedStarship} getData={getStarship} getImageUrl={getStarshipImage}>

                        <Record field="model" label="Model"/>
                        <Record field="length" label="Length"/>
                        <Record field="costInCredits" label="Cost"/>

                </ItemDetails>
            </div>
        );
    }
}
