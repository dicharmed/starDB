import React, {Component} from 'react';
import '../item-list/item-list.css';


import SwapiService from "../../services/swapi-service";
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import ErrorButton from "../error-button";
import ErrorBoundry from "../error-boundry/ErrorBoundry";
import {Record} from "../item-details/ItemDetails";
import {PeopleList} from "../sw-components";

export default class PeoplePage extends Component {
    swapiService = new SwapiService();

    state = {
        selectedPerson: null
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }


    render(){

        const {
            getAllPeople,
            getPerson,
            getPersonImage
            } = this.swapiService;

        return(
            <ErrorBoundry>
                <div className="peoplePage block-items">

                    {/*<ItemList onItemSelected={this.onPersonSelected}*/}
                    {/*          getData={getAllPeople}>*/}

                    {/*    {*/}
                    {/*        (i)=>`${i.name} (${i.gender}, ${i.birthYear})`*/}
                    {/*    }*/}

                    {/*</ItemList>*/}

                    <PeopleList>
                        { (i) => <span>{i.name} </span> }
                    </PeopleList>

                    {/*<ErrorBoundry>*/}
                    {/*    <ItemDetails*/}
                    {/*        itemId={this.state.selectedPerson}*/}
                    {/*        getData={getPerson}*/}
                    {/*        getImageUrl={getPersonImage}>*/}

                    {/*        <Record field="gender" label="Gender"/>*/}
                    {/*        <Record field="eyeColor" label="Eye Color"/>*/}
                    {/*        <Record field="birthYear" label="Birth Year"/>*/}

                    {/*    </ItemDetails>*/}
                    {/*</ErrorBoundry>*/}
                    <ErrorButton/>

                </div>
            </ErrorBoundry>
        );
    }

}