import React, {Component} from 'react';
import './item-details.css';


import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import ErrorButton from "../error-button/ErrorButton";


export default class ItemDetails extends Component {
    swapiService = new SwapiService();

    state = {
        item: null,
        loading: true,
        img: null
    }

    componentDidMount() {
        this.updateItem();
    }

    updateItem() {
        const {itemId, getData, getImageUrl} = this.props;
        if (!itemId) {
            return;
        }

        getData(itemId)
            .then((item)=>{
                this.setState({
                    item,
                    loading: false,
                    img:getImageUrl(item)
                })
            });
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    render() {

        const {item, loading, img} = this.state;

        const notSelected = !this.state.item;
        const spinner = loading && !notSelected ? <Spinner/> : null;
        const msg = loading && notSelected ? <span className="msg">Select an item from a list</span> : null;
        const content = !loading && !notSelected ? <Item itemInfo={item} image={img} propsChildren={this.props.children}/> : null;

        return (
            <div className="card card-block personDetails">
                {spinner}
                {msg}
                {content}
            </div>
        );
    };
};


const Record = ({itemInfo, field, label}) => {

    return(
        <li className="list-group-item">{label}
            <span className="list-group-desc">{itemInfo[field]}</span>
        </li>
    );
}

export {
    Record
}

const Item = ({itemInfo, image, propsChildren}) => {

    const {name} = itemInfo;

    return (
        <React.Fragment>
            <div className="card__left">
                <img src={image} alt=""/>
            </div>

            <div className="card__right card-person">
                <div className="card-title card-title-block-person">{name}</div>

                <ul className="list-group list-group-flush list-group-block">

                    {
                        React.Children.map(propsChildren, (child) => {
                            return React.cloneElement(child, {itemInfo});
                        })
                    }

                </ul>
            </div>

            <ErrorButton/>
        </React.Fragment>
    )

}


