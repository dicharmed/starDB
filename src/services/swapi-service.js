export default class SwapiService {
    _apiBase = 'https://swapi.co/api';
    _imageBase = 'https://starwars-visualguide.com/assets/img';

    getSwapi = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok) {
            throw new Error('Error');
        }

        return await res.json();
    }

    getAllPeople = async () => {
        const res = await this.getSwapi( '/people/');
        return res.results.map(this._transformPerson);
    }

    getPerson = async (id) => {
        const person = await this.getSwapi(`/people/${id}/`);
        return this._transformPerson(person);
    }

    getAllPlanets = async () => {
        const res = await this.getSwapi('/planets/');
        return res.results.map(this._transformPlanet);
    }

    getPlanet = async (id) => {
        const planet = await this.getSwapi(`/planets/${id}/`);
        return this._transformPlanet(planet);
    }

    getAllStarships = async () => {
        const res = await this.getSwapi(`/starships/`);
        return res.results.map(this._transformStarship);
    }

    getStarship = async (id) => {
        const starship = await this.getSwapi(`/starships/${id}/`);
        return this._transformStarship(starship);
    }

    getPersonImage = ({id}) => {
        return `${this._imageBase}/characters/${id}.jpg`;
    }

    getStarshipImage = ({id}) => {
        return `${this._imageBase}/starships/${id}.jpg`;
    }

    getPlanetImage = ({id}) => {
        return `${this._imageBase}/planets/${id}.jpg`;
    }
    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)\/$/;
        const id = item.url.match(idRegExp)[1];
        return id;
    }

    _transformStarship = (startship) => {
        return{
            id: this._extractId(startship),
            name: startship.name,
            model: startship.model,
            manufacturer: startship.manufacturer,
            costInCredits: startship.cost_in_credits,
            length: startship.length,
            crew: startship.crew,
            passengers: startship.passengers,
            cargoCapacity: startship.cargo_capacity
        }
    }

    _transformPerson = (person) => {
        return{
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        }
    }

    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }
}
