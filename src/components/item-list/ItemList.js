import React, {Component} from 'react';
import './item-list.css';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";

export default class ItemList extends Component {
    swapiService = new SwapiService();

    state = {
        peopleList: null
    }

    componentDidMount() {
        this.swapiService.getAllPeople().then(peopleList => {
            this.setState({
                peopleList
            })
        })
    }

    renderItems(arr) {
        return arr.map(({id, name}) => {
            return(
                <div className="list-group-item list-group-item-action" key={id} onClick={() => {this.props.onItemSelected(id)}}>
                    {name}
                </div>
            )
        })
    }

    render(){
        const {peopleList} = this.state;
        if(!peopleList){
            return <Spinner/>
        }
        const peopleArr = this.renderItems(peopleList);
        return(
            <div className="list-group itemList">
                {peopleArr}
            </div>
        )
    }

}
