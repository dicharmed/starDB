import React, {Component} from 'react';
import './person-details.css';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";

export default class PersonDetails extends Component {
    swapiService = new SwapiService();

    state = {
        person: null,
        loading: true
    }

    componentDidMount() {
        this.updatePerson();
    }

    onPersonLoaded = (person) => {
        this.setState({
            person,
            loading: false
        });
    }

    updatePerson() {
        const {personId} = this.props;
        if (!personId) {
            return;
        }
        this.swapiService.getPerson(personId).then(this.onPersonLoaded);
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson();
        }
    }

    render() {
        const {person, loading} = this.state;

        const notSelected = !this.state.person;
        const spinner = loading && !notSelected ? <Spinner/> : null;
        const msg = loading && notSelected ? <span className="msg">Select a person from a list</span> : null;
        const content = !loading && !notSelected ? <PersonInfo personInfo={person}/> : null;

        return (
            <div className="card card-block personDetails">
                {spinner}
                {msg}
                {content}
            </div>
        );
    };
};

const PersonInfo = ({personInfo}) => {

    const { id, name, gender, birthYear, eyeColor } = personInfo;

    return (
        <React.Fragment>
            <div className="card__left">
                <img src={`https://starwars-visualguide.com//assets/img/characters/${id}.jpg`} alt=""/>
            </div>

            <div className="card__right card-person">
                <div className="card-title card-title-block-person">{name}</div>

                <ul className="list-group list-group-flush list-group-block">
                    <li className="list-group-item">Gender
                        <span className="list-group-desc">{gender}</span>
                    </li>
                    <li className="list-group-item">Birth Year
                        <span className="list-group-desc">{birthYear}</span>
                    </li>
                    <li className="list-group-item">Eye Color
                        <span className="list-group-desc">{eyeColor}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )

}


